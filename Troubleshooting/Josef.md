# Tanstack Qurery
I hade problem to get proper ts when I tray to use createQuery from TanStack
## Troubleshooting
My first attempt was to write like this
``` svelte
	const query  = createQuery<PokedexType>({
        queryKey: ["Pokemon"],
        queryFn: () => fetchPokemonList(),
        refetchInterval: 1000
    });
```
