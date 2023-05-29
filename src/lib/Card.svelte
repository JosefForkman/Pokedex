<script lang="ts">
	import type { PokemonV2Pokemon } from "../types/PokemonGrid";

	export let Pokemon: PokemonV2Pokemon;
	export let currentPokemon;

	function selectPokemon() {
		console.log(Pokemon);
		currentPokemon = Pokemon.name;
		window.scrollTo(0, 0);
	}

	const sprites = Pokemon.pokemon_v2_pokemonsprites[0].sprites;
</script>

<div>
	{#if typeof sprites != "string"}
		{#if sprites.versions?.["generation-v"]["black-white"].animated?.front_default}
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/${sprites.versions?.["generation-v"]["black-white"].animated?.front_default}`}
				alt="image on {Pokemon.name}"
			/>
		{:else}
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/${sprites.front_default}`}
				alt="image on {Pokemon.name}"
			/>
		{/if}
	{/if}
	<b>{Pokemon.name}</b>
	<p>Pokedex entry {Pokemon.id}</p>
	<button on:click={selectPokemon}>shows</button>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 200px;
		background-color: #d9d9d9;
		border-radius: 0.25em;
	}
</style>
