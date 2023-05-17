<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  const queryClient = new QueryClient()
</script>

<QueryClientProvider client={queryClient}>
  <main>
    <h1>Pokedex, woooo!!!!</h1>
  </main>
</QueryClientProvider>

<style>
</style>
