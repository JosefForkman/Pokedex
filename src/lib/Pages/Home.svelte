<script lang="ts">
    import { request, gql } from "graphql-request";
	import { createQuery } from "@tanstack/svelte-query";
	import Card from "../Card.svelte";
	import PokemonCard from "../PokemonCard.svelte";
	import type { PokemonType, PokemonV2Pokemon } from "../../types/PokemonGrid";
	import { onDestroy } from "svelte";

	let currentPokemon:string
	
	let pokemonLists: PokemonV2Pokemon[] = [];

	
	const graphqlFetch = async (version = "diamond"): Promise<PokemonType> => {
        const url = "https://beta.pokeapi.co/graphql/v1beta";
        const document = gql`
            query {
                pokemon_v2_pokemon(
                    limit: 200
                    where: {
                        pokemon_v2_encounters: {
                            pokemon_v2_version: { name: { _eq: ${version} } }
                        }
                    }
                ) {
                    name
                    id
                    pokemon_v2_pokemonsprites {
                        sprites
                    }
                }
            }
        `;

        let res = await request<PokemonType>(url, document);

        res.pokemon_v2_pokemon.forEach((Pokemon) => {
            let sprite = Pokemon.pokemon_v2_pokemonsprites[0].sprites;

            /* Check if sprite is not stringify JSON */
            if (typeof sprite == "string") {
                
                /* Fix sprite url */
                sprite = sprite.replaceAll("/media", "");

                /* Parse sprit to JSON */
                const parsedData = JSON.parse(sprite);

                sprite = parsedData;
            }
            
            /* Update sprite object on respond */
            Pokemon.pokemon_v2_pokemonsprites[0].sprites = sprite;
        });

        return res;
    };

	const query = createQuery<PokemonType, Error>({
        queryKey: ["Pokemon"],
        queryFn: () => graphqlFetch(),
    });

    const Unsubscriber = query.subscribe(({ data }) => {
        /* Make shore data is not empty  */
        if (!data) {
            return "Något hände";
        }

        pokemonLists = data.pokemon_v2_pokemon;
    });

	/* Remove fetch query after use */
	onDestroy(() => {
		Unsubscriber()
	})
</script>

<PokemonCard />

<section>
	{#each pokemonLists as pokemonList}
		<Card
			bind:currentPokemon
			Pokemon={pokemonList}
		/>
	{/each}
</section>


<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 45px;
		margin-inline: 130px;
	}
</style>
