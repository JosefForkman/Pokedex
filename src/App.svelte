<script lang="ts">
	import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
	import Home from "./lib/Pages/Home.svelte";
	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<main>
		<Home />
	</main>
</QueryClientProvider>

<style></style>
