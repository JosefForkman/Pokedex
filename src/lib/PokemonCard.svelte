<script lang="ts">
	import { createQuery } from "@tanstack/svelte-query";
	import type { Pokemon } from "../types/pokemon";

	type PokemonData = Pick<
		Pokemon,
		"id" | "name" | "sprites" | "types" | "stats"
	>;

	enum statsIndex {
		Hp,
		Attack,
		Defense,
		SpecialAttack,
		SpecialDefense,
		Speed,
	}

	let chosenPokemon: PokemonData;

	export let pokemonName = "umbreon";

	$: query = createQuery({
		queryKey: ["singlePokemon", pokemonName],
		queryFn: async () => {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
			);

			const data = await response.json();

			if (data) {
				chosenPokemon = {
					id: data.id,
					name:
						data.name.charAt(0).toUpperCase() + data.name.slice(1),
					sprites: data.sprites,
					types: data.types,
					stats: data.stats,
				};
			}

			return data;
		},
	});

	const changePokemon = () => {
		console.log(pokemonName);

		// pokemonName = "gyarados";
		pokemonName = "pikachu";

		console.log(pokemonName);
	};
</script>

{#if $query.isLoading}
	<p>Loading...</p>
{:else if $query.isSuccess}
	<section>
		<p>Name: {chosenPokemon.name}</p>
		<p>Pokedex entry: {chosenPokemon.id}</p>
		<div>
			<p>Base Stats</p>
			<ul>
				<li>Hp: {chosenPokemon.stats[statsIndex.Hp].base_stat}</li>
				<li>
					Attack: {chosenPokemon.stats[statsIndex.Attack].base_stat}
				</li>
				<li>
					Defense: {chosenPokemon.stats[statsIndex.Defense].base_stat}
				</li>
				<li>
					Special attack: {chosenPokemon.stats[
						statsIndex.SpecialAttack
					].base_stat}
				</li>
				<li>
					Special defense: {chosenPokemon.stats[
						statsIndex.SpecialDefense
					].base_stat}
				</li>
				<li>
					Speed: {chosenPokemon.stats[statsIndex.Speed].base_stat}
				</li>
			</ul>
		</div>
	</section>

	<button on:click={changePokemon}>click me</button>

	<!-- <img src={chosenPokemon.sprites.front_default} alt="" /> -->
	<img
		src={chosenPokemon.sprites.versions?.["generation-v"]["black-white"]
			.animated?.front_default}
		alt=""
	/>
	<!-- <img src={chosenPokemon.sprites.front_shiny} alt="" /> -->
	<img
		src={chosenPokemon.sprites.versions?.["generation-v"]["black-white"]
			.animated?.front_shiny}
		alt=""
	/>

	{#each chosenPokemon.types as type}
		<p>{type.type.name}</p>
	{/each}
{/if}

<style>
</style>
