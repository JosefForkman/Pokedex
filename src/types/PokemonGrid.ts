import type { Sprites } from './pokemon';

export interface PokemonType {
	pokemon_v2_pokemon: PokemonV2Pokemon[];
}

export interface PokemonV2Pokemon {
	name: string;
	id: number;
	pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
	types: types[];
}

export interface PokemonV2Pokemonsprite {
	sprites: Sprites | string;
}

export interface types {
	type: type;
}
export interface type {
	name: string;
}
