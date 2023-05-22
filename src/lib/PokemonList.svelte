<script lang="ts">
	import { createQuery } from "@tanstack/svelte-query";
	import Card from "./Card.svelte";
	import type { PokedexType, Result } from "../types/pokedex";

	

	let pokedexLists: Result[] = [];

	const pokedex = createQuery({
		queryKey: ["Pokemon"],
		queryFn: async (): Promise<PokedexType> => {
			const respond = await fetch("https://pokeapi.co/api/v2/pokedex");
			return respond.json();
		},
	});

	pokedex.subscribe(({ data }) => {
		if (!data) {
			return "Något hände";
		}
		pokedexLists = data.results;
	});
</script>
<section>
	{#each pokedexLists as list}
			<!-- <a href={list.url}>{list.name}</a> -->
			<Card Pokemon={list} />
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
