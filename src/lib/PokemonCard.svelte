<script lang="ts">
	import { createQuery } from "@tanstack/svelte-query";
	import type { Pokemon } from "../types/pokemon";

	type PokemonData = Pick<
		Pokemon,
		"id" | "name" | "sprites" | "types" | "stats"
	>;

	let chosenPokemon: PokemonData;

	let pokemonName = "umbreon";

	const getPokemon = createQuery({
		queryKey: ["singlePokemon", pokemonName],
		queryFn: async () => {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
			);
			return await response.json();
		},
	});

	getPokemon.subscribe(({ data }) => {
		if (!data) {
			return;
		} else if (data) {
			chosenPokemon = {
				id: data.id,
				name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
				sprites: data.sprites,
				types: data.types,
				stats: data.stats,
			};
			// console.log(chosenPokemon);
		}

		// console.log(isLoading);
		// console.log(data);
	});
</script>

{#if $getPokemon.isLoading}
	<p>Loading...</p>
{:else if $getPokemon.isSuccess}
	<section>
		<p>Name: {chosenPokemon.name}</p>
		<p>Pokedex entry: {chosenPokemon.id}</p>
		<div>
			<p>Base Stats</p>
			<ul>
				<li>Hp: {chosenPokemon.stats[0].base_stat}</li>
				<li>Attack: {chosenPokemon.stats[1].base_stat}</li>
				<li>Defense: {chosenPokemon.stats[2].base_stat}</li>
				<li>Special attack: {chosenPokemon.stats[3].base_stat}</li>
				<li>Special defense: {chosenPokemon.stats[4].base_stat}</li>
				<li>Speed: {chosenPokemon.stats[5].base_stat}</li>
			</ul>
		</div>
	</section>

	<img src={chosenPokemon.sprites.front_default} alt="" />
	<img src={chosenPokemon.sprites.front_shiny} alt="" />
	<!-- <img
		src={chosenPokemon.sprites.versions?.["generation-v"]["black-white"]
			.animated?.front_default}
		alt=""
	/> -->

	{#each chosenPokemon.types as type}
		<p>{type.type.name}</p>
	{/each}
{/if}

<style>
</style>
