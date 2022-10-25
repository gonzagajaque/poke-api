import React, {
    createContext,
    useCallback,
    useContext,
    useLayoutEffect,
    useState
} from 'react';
import { getFormattedPokemonInfoApi } from '../services/api';
import { Pokemon } from '../types/pokemon';
import { getData } from '../utils/storage';

type ContextType = {
    pokemons: Pokemon[],
    loading: boolean,
}

export const Context = createContext({} as ContextType);

export const Provider = ({ children }) => {
    const [pokemons, setPokemons] = useState<Pokemon[] | null>([]);
    const [loading, setLoading] = useState(true);
    const [nextUrl, setNextUrl] = useState<string | undefined>(undefined);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [data, next] = await getFormattedPokemonInfoApi(nextUrl);
            setPokemons((prev) => [...prev, ...data]);
            setNextUrl(next);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    }, [nextUrl, loading]);

    const checkCache = async () => {
        const response = await getData('cache_chave')
        //@ts-ignore
        if (response) {
            setPokemons(JSON.parse(response))
            setLoading(false)
            return
        }
        fetchData();
    }

    useLayoutEffect(() => {
        checkCache()
    }, []);

    return (
        <Context.Provider value={{ pokemons, loading }}>
            {children}
        </Context.Provider>
    )
}

export const usePokemons = () => useContext(Context);