import { graphql, type ResultOf } from "../utils/graphql";

export const PokemonsQuery = graphql(`
	query ($version: String!) {
		pokemon(limit: 200, where: { encounters: { version: { name: { _eq: $version } } } }) {
			name
			id
			pokemonsprites {
				sprites
			}
			pokemontypes {
				type {
					name
				}
			}
		}
	}
`);

export const PokemonsState = graphql(`
	query ($name: String!) {
		pokemon(where: { name: { _eq: $name } }) {
			id
			name
			base_experience
			pokemonstats {
				stat {
					name
				}
				base_stat
			}
			pokemonsprites {
				sprites
			}
			pokemontypes {
				type {
					name
				}
			}
		}
	}
`);

export type Pokemons = ResultOf<typeof PokemonsQuery>['pokemon'];
export type PokemonState = ResultOf<typeof PokemonsState>['pokemon'][0];
