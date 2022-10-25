import React, { useEffect, useState } from "react";
import { getFormattedPokemonInfoApi } from "../../services/api";
import { Pokemon } from "../../types/pokemon";
import PokemonList from "../../components/PokemonList";
import { Body, Container, SubTitle } from "./styles";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { usePokemons } from "../../context/Provider";

export function AllPokemons() {
    const [, setPokemons] = useState<Pokemon[]>([]);
    const [nextUrl, setNextUrl] = useState<string | undefined>(undefined);
    const [search, setSearch] = useState<string>("");
    const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const {
        pokemons
    } = usePokemons()

    const fetchData = async () => {
        setLoading(true);
        try {
            const [data, next] = await getFormattedPokemonInfoApi(nextUrl);
            setPokemons((prev) => [...prev, ...data]);
            setFilteredPokemons((prev) => [...prev, ...data]);
            setNextUrl(next);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };

    const handleSearch = (text: string) => {
        setSearch(text);
        if (text.length > 0) {
            const filtered = pokemons.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredPokemons(filtered);
            return
        }
        setFilteredPokemons(pokemons);

    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container>
            <Header hasBackButton />
            <Body>
                <SubTitle>More than 250 Pokemons for you to choose your favorite</SubTitle>
                <Input
                    placeholder="Pesquisar Pokémon"
                    placeholderTextColor="#666360"
                    value={search}
                    onChangeText={handleSearch}
                    onPress={() => handleSearch(search)}
                />
                <PokemonList
                    pokemons={filteredPokemons}
                    refreshing={loading}
                    onRefresh={fetchData}
                />
            </Body>
        </Container>
    );
}
