# Tanstack Qurery

Jag hade svårt att få TypeScript fungera i TanStack. Den gav mig nästan en typ som man kunde använda min inte riktigt

## Troubleshooting

Mitt första försök var att skriva så här

```svelte
	const query  = createQuery<PokedexType>({
        queryKey: ["Pokemon"],
        queryFn: () => fetchPokemonList(),
        refetchInterval: 1000
    });
```

Sen kom jag på att fetchen skulle ha typen och efter det så fick man rätt typer när man skulle använda det.

```svelte
	const query  = createQuery({
        queryKey: ["Pokemon"],
        queryFn: (): Promise<PokedexType> => fetchPokemonList(),
        refetchInterval: 1000
    });
```
