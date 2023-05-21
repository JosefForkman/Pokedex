<script lang="ts">
    import { createQuery } from "@tanstack/svelte-query";

    type PokedexType = {
        count: number;
        next: string;
        previous?: string;
        results: Result[];
    };

    type Result = {
        name: string;
        url: string;
    };

	type CostomError = {
		message: string
	}

	let Lists: Result[] = []

    // const fetchPokemonList = ;
    const query  = createQuery({
        queryKey: ["Pokemon"],
        queryFn: async (): Promise<PokedexType> => {
        const respond = await fetch("https://pokeapi.co/api/v2/pokedex");
        return respond.json();
    },
        refetchInterval: 1000
    });

	
    

    query.subscribe(({ data, error, isLoading }) => {
        if (!data) {
            return 'Något hände'
        }
        console.log(isLoading);
		Lists = data.results
    });
</script>

<h1>Pokemon list works</h1>

{#each Lists as list }
	<p>{list.name}</p>
{/each}

<style>
    h1 {
        font-size: 3rem;
    }
</style>
