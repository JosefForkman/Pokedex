import { initGraphQLTada } from 'gql.tada';
import type { introspection } from '../pokeapi-graphql-env.d.ts';
import type { Sprites } from '../types/sprites.js';

export const graphql = initGraphQLTada<{
	introspection: introspection;
	scalars: {
		jsonb: Sprites;
	};
}>();

export type { FragmentOf, ResultOf, VariablesOf } from 'gql.tada';
export { readFragment } from 'gql.tada';
