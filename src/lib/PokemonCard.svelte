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
		types: string[];
		hp: number;
		attack: number;
		defense: number;
		specialAttack: number;
		specialDefense: number;
		speed: number;
	};

	let result: Pokemon;

	let pokemonId = 133;

	const getPokemon = createQuery({
		queryKey: ["singlePokemon", pokemonId],
		queryFn: async () => {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${pokemonId}`
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
</script>

{#if $getPokemon.isLoading}
	<p>Loading...</p>
{:else if $getPokemon.isSuccess}
	<section />
	<div>
		<p>Name:</p>
		<p>{result.name}</p>
	</div>

	<div>
		<p>Pokedex entry:</p>
		<p>{result.id}</p>
	</div>

	<div>
		<p>Base hp:</p>
		<p>{result.hp}</p>
	</div>

	<div>
		<p>Base attack:</p>
		<p>{result.attack}</p>
	</div>

	<div>
		<p>Base defense:</p>
		<p>{result.defense}</p>
	</div>

	<div>
		<p>Base special attack:</p>
		<p>{result.specialAttack}</p>
	</div>

	<div>
		<p>Base special defense:</p>
		<p>{result.specialDefense}</p>
	</div>

	<div>
		<p>Base speed:</p>
		<p>{result.speed}</p>
	</div>

	<img src={result.sprites.default} alt="" />
	<img src={result.sprites.shiny} alt="" />

	{#each result.types as type}
		<p>{type.type.name}</p>
	{/each}
{/if}

<style>
</style>
