<script lang="ts">
	import { createQuery } from "@tanstack/svelte-query";
	// import { useState } from "./hooks.ts";

	type Pokemon = {
		id: number;
		name: string;
		sprite: string;
		shinySprite: string;
		types: string[];
		hp: number;
		attack: number;
		defense: number;
		specialAttack: number;
		specialDefense: number;
		speed: number;
	};

	const getPokemon = createQuery({
		queryKey: ["singlePokemon"],
		queryFn: async () => {
			const response = await fetch(
				"https://pokeapi.co/api/v2/pokemon/133"
			);
			return await response.json();
		},
	});

	// console.log(getPokemon);
	let result;

	getPokemon.subscribe((value) => {
		result = value;
		console.log(result);
	});

	// console.log(result);

	// console.log(result);

	/* type Result = {
		id: number;
	}; */

	// let chosenPokemon: Result[] = [];

	/* const query = createQuery({
		queryKey: ["pokemon"],
		queryFn: async (): Promise<Result> => {
			const response = await fetch(
				"https://pokeapi.co/api/v2/pokemon/133"
			);
			return response.json();
		},
		// refetchInterval: 1000,
	}); */

	/* query.subscribe(({ data, error, isLoading }) => {
		if (!data) {
			return error;
		}
		console.log(isLoading);
		console.log(data);
		// chosenPokemon = data;
	}); */

	// console.log(chosenPokemon[0].name);
</script>

{#await getPokemon}
	<p>...waiting</p>
{:then data}
	<p>{data}</p>
{:catch error}
	<p>An error occurred!</p>
{/await}

<!-- <h1>{chosenPokemon[0].name}</h1> -->

<!-- <div>
	<p>{chosenPokemon[0].stats[0].stat.name}:</p>
	<p>{chosenPokemon[0].stats[0].base_stat}</p>
</div> -->

<!-- <div>
	<p>{chosenPokemon[0].stats[1].stat.name}:</p>
	<p>{chosenPokemon[0].stats[1].base_stat}</p>
</div> -->

<!-- <div>
	<p>{chosenPokemon[0].stats[2].stat.name}:</p>
	<p>{chosenPokemon[0].stats[2].base_stat}</p>
</div> -->

<!-- <div>
	<p>{chosenPokemon[0].stats[3].stat.name}:</p>
	<p>{chosenPokemon[0].stats[3].base_stat}</p>
</div> -->

<!-- <div>
	<p>{chosenPokemon[0].stats[4].stat.name}:</p>
	<p>{chosenPokemon[0].stats[4].base_stat}</p>
</div> -->

<!-- <div>
	<p>{chosenPokemon[0].stats[5].stat.name}:</p>
	<p>{chosenPokemon[0].stats[5].base_stat}</p>
</div> -->

<!-- <div>
	<p>Pokedex entry:</p>
	<p>{chosenPokemon[0].id}</p>
</div> -->

<!-- {#each chosenPokemon[0].types as type}
	<p>{type.name}</p>
{/each} -->

<!-- <img src={chosenPokemon[0].sprites.front_default} alt="" /> -->

<!-- <img src={chosenPokemon[0].sprites.front_shiny} alt="" /> -->
<!-- <img src={chosenPokemon[0].sprites.front_shiny} alt="" /> -->

<style>
</style>
