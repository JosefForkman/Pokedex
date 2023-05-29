<script lang="ts">
	import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
	import Home from "./lib/Pages/Home.svelte";
	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<main>
		<h1>Pokemon Pokedex</h1>
		<Home />
	</main>
</QueryClientProvider>

<style>
	h1 {
		font-family: "Press Start 2P", cursive;
	}
</style>
