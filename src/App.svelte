<script lang="ts">
	import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
	import PokemonList from "./lib/PokemonList.svelte";
	import PokemonCard from "./lib/PokemonCard.svelte";
	const queryClient = new QueryClient();

	let currentPokemon = "";
</script>

<QueryClientProvider client={queryClient}>
	<main>
		<h1>Pokedex, woooo!!!! {currentPokemon}</h1>
		<PokemonCard />
		<PokemonList bind:currentPokemon/>
	</main>
</QueryClientProvider>

<style>
	h1 {
		font-size: 3rem;
		color: red;
	}
</style>
