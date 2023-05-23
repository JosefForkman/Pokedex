<script lang="ts">
	import { createQuery } from "@tanstack/svelte-query";
	import { each } from "svelte/internal";

	type Pokemon = {
		id: number;
		name: string;
		sprites: {
			default: string;
			shiny: string;
		};
		types: [type: {}];
		hp: number;
		attack: number;
		defense: number;
		specialAttack: number;
		specialDefense: number;
		speed: number;
	};

	let result: Pokemon;

	const getPokemon = createQuery({
		queryKey: ["singlePokemon"],
		queryFn: async () => {
			const response = await fetch(
				"https://pokeapi.co/api/v2/pokemon/133"
			);
			return await response.json();
		},
	});

	getPokemon.subscribe(({ data, error, isLoading }) => {
		if (!data) {
			return;
		} else if (data) {
			result = {
				id: data.id,
				name: data.name,
				sprites: {
					default: data.sprites.front_default,
					shiny: data.sprites.front_shiny,
				},
				types: data.types,
				hp: data.stats[0].base_stat,
				attack: data.stats[1].base_stat,
				defense: data.stats[2].base_stat,
				specialAttack: data.stats[3].base_stat,
				specialDefense: data.stats[4].base_stat,
				speed: data.stats[5].base_stat,
			};

			console.log(result);
		}

		// console.log(isLoading);
		console.log(data);
		// result = data;
	});
	// console.log(getPokemon);

	// console.log(result);

	// console.log(result);

	/* type Result = {
		id: number;
	}; */

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

{#if $getPokemon.isLoading}
	<p>Loading...</p>
{:else if $getPokemon.isSuccess}
	<p>{result.name}</p>
	<p>{result.id}</p>
	<p>{result.hp}</p>
	<p>{result.attack}</p>
	<p>{result.defense}</p>
	<p>{result.specialAttack}</p>
	<p>{result.specialDefense}</p>
	<p>{result.speed}</p>

	<img src={result.sprites.default} alt="" />
	<img src={result.sprites.shiny} alt="" />

	<!-- {#each result.types as type}
		<p>{type.type.name}</p>
	{/each} -->
{/if}

<style>
</style>
