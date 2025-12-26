<script lang="ts">
	import type { PokemonV2Pokemon } from '../types/PokemonGrid';

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
	{#if typeof sprites != 'string'}
		{#if sprites.versions?.['generation-v']['black-white'].animated?.front_default}
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/${sprites.versions?.['generation-v']['black-white'].animated?.front_default}`}
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
	<button on:click={selectPokemon}>show</button>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-template-rows: repeat(2, auto) 1fr;
		column-gap: 1rem;
		background-color: #d9d9d9;
		color: #fff;
		height: 160px;
		padding: 1rem;
		border-radius: 0.5rem;
	}

	img {
		grid-row: span 3;
		width: 100%;
	}

	button {
		align-self: baseline;
		color: #fff;
		background-color: transparent;
		padding-block: 0.5rem;
		border: 2px solid #fff;
		border-radius: 1vw;
	}

	.type-fire {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #bf0000 0%, #910000 100%);
	}
	.type-grass {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #12a812 0%, #0d590d 100%);
	}
	.type-bug {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #34e934 0%, #1ab21a 100%);
	}
	.type-electric {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #f5e90e 0%, #d3a701 100%);
	}
	.type-water {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #0951d5 0%, #000b39 100%);
	}
	.type-dragon {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #80abfa 0%, #0535ff 100%);
	}
	.type-flying {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #e2ecfe 0%, #6b88ff 100%);
	}
	.type-ice {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #539ddf 0%, #206aac 100%);
	}
	.type-strength {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #c95717 0%, #632b0b 100%);
	}
	.type-ground {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #e97c3f 0%, #a54812 100%);
	}
	.type-rock {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #c9bc8a 0%, #a18f4a 100%);
	}
	.type-fighting {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #ff4747 0%, #8f0000 100%);
	}
	.type-fairy {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #d1329c 0%, #761b67 100%);
	}
	.type-dark {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #939393 0%, #424242 100%);
	}
	.type-metal {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #afafaf 0%, #515151 100%);
	}
	.type-normal {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #afafaf 0%, #636363 100%);
	}
	.type-psychic {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #9844bf 0%, #54266b 100%);
	}
	.type-poison {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #c291d9 0%, #8e40b5 100%);
	}
	.type-ghost {
		background: radial-gradient(82.81% 82.81% at 50% 50%, #df72bb 0%, #b3299c 100%);
	}
</style>
