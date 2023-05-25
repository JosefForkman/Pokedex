<script lang="ts">
	import { createQuery } from "@tanstack/svelte-query";
	import Card from "./Card.svelte";
	import type { PokedexSpecifikType, PokemonEntry } from "../types/pokedex";
	
	export let currentPokemon = "snälla ändra"
	
	let pokemonLists: PokemonEntry[] = [];

	const pokedex = createQuery({
		queryKey: ["Pokemon"],
		queryFn: async (): Promise<PokedexSpecifikType> => {
			const respond = await fetch("https://pokeapi.co/api/v2/pokedex/6");
			return respond.json();
		},
	});

	pokedex.subscribe(({ data }) => {
		if (!data) {
			return "Något hände";
		}
		console.log(data);

		pokemonLists = data.pokemon_entries;
	});
</script>

<section>
	{currentPokemon != "snälla ändra" ? currentPokemon + " 😍" : "snälla ändra" }
	{#each pokemonLists as pokemonList}
		<Card
			bind:currentPokemon
			Pokemon={pokemonList}
		/>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 45px;
		margin-inline: 130px;
	}
</style>
