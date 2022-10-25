export interface Base {
	name: string;
	url?: string;
}

export interface PokemonItemProps {
	pokemon: Pokemon;
	navigation: any;
}

export interface BasePokemon extends Base {
	id: string;
	order: string;
}

export interface OriginalPokemon extends Base {
	url: string;
}

export interface OriginalPokemonDetail extends BasePokemon {
	sprites: any;
	types: OriginalPokemonType[];
	weight: number;
	height: number;
	stats: OriginalPokemonStats[];
}

export interface Pokemon extends BasePokemon {
	image: string;
	types: PokemonType[];
	number: string;
	weight: number;
	height: number;
	stats: PokemonStat[];
}

export interface OriginalPokemonType {
	slot: number;
	type: Base;
}

export interface OriginalPokemonStats {
	base_stat: number;
	stat: Base;
}

export interface PokemonType extends Base { }

export interface PokemonStat extends Base { }