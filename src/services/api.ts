import { baseUrl } from "../utils/constants";
import axios from "axios";
import {
  OriginalPokemonDetail,
  OriginalPokemon,
  Pokemon,
} from "../types/pokemon";

export const getPokemonsApi = async (nextUrl?: string) => {
  try {
    const url = nextUrl || `${baseUrl}/pokemon?limit=250&offset=0`;
    const {
      data,
    }: { data: { results: OriginalPokemon[]; next: string } } =
      await axios.get(url);
    const pokemons = data.results;
    const next = data.next;
    return { pokemons, next };
  } catch (e) {
    throw e;
  }
};

export const getPokemonByUrlApi = async (url: string) => {
  try {
    const { data }: { data: OriginalPokemonDetail } = await axios.get(
      url
    );
    return data;
  } catch (e) {
    throw e;
  }
};

export const getFormattedPokemonInfoApi = async (
  nextUrl?: string
): Promise<[Pokemon[], string]> => {
  const { pokemons, next } = await getPokemonsApi(nextUrl);
  const pokemonsDetail = await Promise.all(
    pokemons.map(async ({ url }): Promise<Pokemon> => {
      const originalDetail = await getPokemonByUrlApi(url);
      return formatPokemonInfo(originalDetail);
    })
  );
  return [pokemonsDetail, next];
};

export async function getPokemonDetailsApi(id: string) {
  try {
    const url = `${baseUrl}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return formatPokemonInfo(result);
  } catch (error) {
    throw error;
  }
}

export async function getPokemonsDetailsByIdsApi(ids: string[]) {
  const pokemonsDetail = await Promise.all(
    ids.map(async (id): Promise<Pokemon> => {
      return await getPokemonDetailsApi(id);
    })
  );
  return pokemonsDetail;
}

const formatPokemonInfo = (
  originalDetail: OriginalPokemonDetail
): Pokemon => {
  const { id, name, order } = originalDetail;
  const image = originalDetail.sprites.other["official-artwork"].front_default;
  const height = originalDetail.height / 10;
  const weight = originalDetail.weight / 10;
  const types = originalDetail.types.map(({ type }) => type);
  const stats = originalDetail.stats.map(({ stat, base_stat }) => ({
    ...stat,
    base_stat,
  }));
  const number = String(id).padStart(3, "0");
  return {
    id,
    name,
    order,
    image,
    types,
    number,
    height,
    weight,
    stats
  };
};