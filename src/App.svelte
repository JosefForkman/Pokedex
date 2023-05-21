<script lang="ts">
	import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
	import PokemonList from "./lib/PokemonList.svelte";
	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<main>
		<h1>Pokedex, woooo!!!!</h1>
		<PokemonList />
	</main>
</QueryClientProvider>

<style>
	h1 {
		font-size: 3rem;
		color: red;
	}
</style>
