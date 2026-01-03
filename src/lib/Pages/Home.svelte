<script lang="ts">
	import { request } from 'graphql-request';
	import { createQuery } from '@tanstack/svelte-query';
	import Card from '../Card.svelte';
	import PokemonCard from '../PokemonCard.svelte';
	import { PokemonsQuery } from '../queries';

	let currentPokemon: string | undefined = $state();
	let pokemonVersion = $state('gold');

	


	const graphqlFetch = async (version = 'gold') => {
		const url = 'https://graphql.pokeapi.co/v1beta2';

		let res = await request(url, PokemonsQuery, { version });

		return res;
	};

	let query = $derived(
		createQuery({
			queryKey: [pokemonVersion],
			queryFn: () => graphqlFetch(pokemonVersion),
			cacheTime: 100,
			staleTime: 2000
		})
	);	
</script>

<PokemonCard pokemonName={currentPokemon} />

<form>
	<label for="selectPokemon">Filter select pokemon version</label>
	<select id="selectPokemon" bind:value={pokemonVersion}>
		<option value="gold">gold</option>
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
		{#each $query.data.pokemon as pokemonList (pokemonList.id)}
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
