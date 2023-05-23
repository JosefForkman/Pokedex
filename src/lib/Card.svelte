<script lang="ts">
	import type { PokemonEntry } from "../types/pokedex";
	
	export let Pokemon:PokemonEntry
	export let currentPokemon;

	
	function selectPokemon() {
		console.log(Pokemon);
		currentPokemon = Pokemon.pokemon_species.name
	}
</script>
	<div>
		<b>{Pokemon.pokemon_species.name}</b>
		<p>Pokedex entry {Pokemon.entry_number}</p>
		<button on:click={selectPokemon}>shows</button>
	</div>
<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 150px;
		background-color: #D9D9D9;
		border-radius: .25em;
	}
</style>
