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

<div class={`type-${Pokemon.types[0].type.name}`}>
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
		background-color: #d9d9d9;
		color: #fff;
		height: 200px;
		border-radius: 0.5rem;
	}

	.type-fire {
		background: radial-gradient(
			82.81% 82.81% at 50% 50%,
			#bf0000 0%,
			#910000 100%
		);
	}
	.type-grass {
		background: radial-gradient(
			82.81% 82.81% at 50% 50%,
			#12a812 0%,
			#0d590d 100%
		);
	}
	.type-bug {
		background: radial-gradient(
			82.81% 82.81% at 50% 50%,
			#34e934 0%,
			#1ab21a 100%
		);
	}
	.type-electric {
		background: radial-gradient(
			82.81% 82.81% at 50% 50%,
			#f5e90e 0%,
			#d3a701 100%
		);
	}
	.type-water {
		background: radial-gradient(
			82.81% 82.81% at 50% 50%,
			#0951d5 0%,
			#000b39 100%
		);
	}
	.type-dragon {
		background: radial-gradient(
			82.81% 82.81% at 50% 50%,
			#80abfa 0%,
			#0535ff 100%
		);
	}
	.type-flying {
		background: radial-gradient(
			82.81% 82.81% at 50% 50%,
			#e2ecfe 0%,
			#6b88ff 100%
		);
	}
	.type-strength {
		background: radial-gradient(
			82.81% 82.81% at 50% 50%,
			#c95717 0%,
			#632b0b 100%
		);
	}
	.type-fairy {
		background: radial-gradient(
			82.81% 82.81% at 50% 50%,
			#d1329c 0%,
			#761b67 100%
		);
	}
	.type-dark {
		background: radial-gradient(
			82.81% 82.81% at 50% 50%,
			#939393 0%,
			#424242 100%
		);
	}
	.type-metal {
		background: radial-gradient(
			82.81% 82.81% at 50% 50%,
			#afafaf 0%,
			#515151 100%
		);
	}
	.type-normal {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #AFAFAF 0%, #636363 100%);
	}
	.type-psychic {
		background: radial-gradient(
			82.81% 82.81% at 50% 50%,
			#9844bf 0%,
			#54266b 100%
		);
	}
</style>
