<script lang="ts">
	import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
	import Home from "./lib/Pages/Home.svelte";
	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<main>
		<header>
			<h1>Pokémon Pokedex</h1>
		</header>
		<Home />
	</main>
</QueryClientProvider>

<style>
	h1 {
		font-family: "Press Start 2P", cursive;
		font-size: 3rem;
	}

	header {
		display: flex;
		justify-content: center;
		margin: 50px 0 50px 0;
	}

	* {
		font-family: "Montserrat", sans-serif;
	}
</style>
