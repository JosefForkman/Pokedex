<script lang="ts">
	import { request, gql } from 'graphql-request';
	import { createQuery } from '@tanstack/svelte-query';
	import Card from '../Card.svelte';
	import PokemonCard from '../PokemonCard.svelte';
	import type { PokemonType } from '../../types/PokemonGrid';

	let currentPokemon: string;
	let pokemonVersion = 'red';

	const graphqlFetch = async (version = 'gold'): Promise<PokemonType> => {
		const url = 'https://beta.pokeapi.co/graphql/v1beta';
		const document = gql`
			query {
				pokemon_v2_pokemon(
					limit: 200
					where: {
						pokemon_v2_encounters: {
							pokemon_v2_version: { name: { _eq: ${version} } }
						}
					}
				) {
					name
					id
					pokemon_v2_pokemonsprites {
						sprites
					}
					types: pokemon_v2_pokemontypes {
						type: pokemon_v2_type {
							name
						}
					}
				}
			}
		`;

		let res = await request<PokemonType>(url, document);

		res.pokemon_v2_pokemon.forEach((Pokemon) => {
			let sprite = Pokemon.pokemon_v2_pokemonsprites[0].sprites;

			/* Check if sprite is not stringify JSON */
			if (typeof sprite == 'string') {
				/* Fix sprite url */
				sprite = sprite.replaceAll('/media', '');

				/* Parse sprit to JSON */
				const parsedData = JSON.parse(sprite);

				sprite = parsedData;
			}

			/* Update sprite object on respond */
			Pokemon.pokemon_v2_pokemonsprites[0].sprites = sprite;
		});

		return res;
	};

	$: query = createQuery<PokemonType, Error>({
		queryKey: [pokemonVersion],
		queryFn: () => graphqlFetch(pokemonVersion),
		cacheTime: 100,
		staleTime: 2000
	});
</script>

<PokemonCard pokemonName={currentPokemon} />

<form>
	<label for="selectPokemon">Filter select pokemon version</label>
	<select id="selectPokemon" bind:value={pokemonVersion}>
		<option value="red">red</option>
		<option value="blue">blue</option>
		<option value="yellow">yellow</option>
		<option value="firered">firered</option>
		<option value="leafgreen">leafgreen</option>
		<option value="heartgold">heartgold</option>
		<option value="soulsilver">soulsilver</option>
		<option value="x">x</option>
		<option value="y">y</option>
		<option value="diamond">diamond</option>
		<option value="pearl">pearl</option>
		<option value="platinum">platinum</option>
	</select>
</form>

<section>
	{#if $query.data}
		{#each $query.data.pokemon_v2_pokemon as pokemonList, i (i)}
			<Card bind:currentPokemon Pokemon={pokemonList} />
		{/each}
	{/if}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
		margin-inline: 1rem;
	}

	form {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
		flex-direction: column;
		margin-inline: 1rem;
		margin-block: 2rem;
	}

	@media screen and (min-width: 800px) {
		section {
			margin-inline: 3rem;
		}
		form {
			margin-inline: 3rem;
		}
	}
	@media screen and (min-width: 1200px) {
		section {
			margin-inline: 8rem;
		}
		form {
			margin-inline: 8rem;
		}
	}
</style>
