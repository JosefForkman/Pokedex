<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import request from 'graphql-request';
	import { PokemonsState, type PokemonState } from './queries';

	const statsIndex = {
		Hp: 0,
		Attack: 1,
		Defense: 2,
		SpecialAttack: 3,
		SpecialDefense: 4,
		Speed: 5
	} as const;

	let chosenPokemon: PokemonState | null = $state(null);

	interface Props {
		pokemonName?: string;
	}

	let { pokemonName = 'umbreon' }: Props = $props();

	const graphqlFetch = async () => {
		const url = 'https://graphql.pokeapi.co/v1beta2';
		const res = await request(url, PokemonsState, { name: pokemonName });

		if (res.pokemon.length > 0) {
			const data = res.pokemon[0];

			chosenPokemon = data;
		}
		return res;
	};

	const query = $derived(
		createQuery({
			queryKey: ['singlePokemon', pokemonName],
			queryFn: graphqlFetch
		})
	);

	// Extract stats from chosenPokemon for easier access
	const stats = $derived.by(
		() =>
			chosenPokemon?.pokemonstats.map((stat) => ({
				name: stat.stat?.name,
				base_stat: stat.base_stat
			})) ?? []
	);
</script>

{#if $query.isLoading}
	<div class="loading-block">
		<p>Loading...</p>
	</div>
{:else if $query.isSuccess}
	<section class="pokemon-card">
		<div class="pokemon-sprite">
			{#if chosenPokemon?.pokemonsprites.at(0)?.sprites.versions?.['generation-v']['black-white'].animated?.front_default}
				<img
					src={chosenPokemon.pokemonsprites.at(0)?.sprites.versions?.['generation-v'][
						'black-white'
					].animated?.front_default}
					alt=""
				/>
			{:else if chosenPokemon?.pokemonsprites.at(0)?.sprites.front_default}
				<img src={chosenPokemon.pokemonsprites.at(0)?.sprites.front_default} alt="" />
			{/if}
		</div>

		<div class="pokemon-info">
			<div class="pokemon-info-text">
				<h2>{chosenPokemon?.name}</h2>

				<p>Pokedex entry: {chosenPokemon?.id}</p>

				<div class="type-wrapper">
					<p>Types:</p>
					{#each chosenPokemon?.pokemontypes as pokemonType, index (index)}
						<p>
							{pokemonType.type?.name}
						</p>
					{/each}
				</div>
			</div>

			<div class="pokemon-sprite-shiny">
				{#if chosenPokemon?.pokemonsprites.at(0)?.sprites.versions?.['generation-v']['black-white'].animated?.front_shiny}
					<img
						src={chosenPokemon.pokemonsprites.at(0)?.sprites.versions?.['generation-v'][
							'black-white'
						].animated?.front_shiny}
						alt=""
					/>
				{:else if chosenPokemon?.pokemonsprites.at(0)?.sprites.front_shiny}
					<img src={chosenPokemon.pokemonsprites.at(0)?.sprites.front_shiny} alt="" />
				{/if}
			</div>
		</div>

		<div class="stats-wrapper">
			<p>Base Stats</p>
			<ul>
				<li>Hp: {stats[statsIndex.Hp]?.base_stat}</li>
				<li>
					Attack: {stats[statsIndex.Attack]?.base_stat}
				</li>
				<li>
					Defense: {stats[statsIndex.Defense]?.base_stat}
				</li>
				<li>
					Special attack: {stats[statsIndex.SpecialAttack]?.base_stat}
				</li>
				<li>
					Special defense: {stats[statsIndex.SpecialDefense]?.base_stat}
				</li>
				<li>
					Speed: {stats[statsIndex.Speed]?.base_stat}
				</li>
			</ul>
		</div>
	</section>
{/if}

<style>
	* {
		margin: 0;
		color: white;
	}

	.loading-block p {
		font-size: 3rem;
		color: white;
	}

	.loading-block {
		margin: 0 48px 0 48px;
		background-color: rgb(46, 22, 34);
		border-radius: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 300px;
	}

	.pokemon-card {
		margin: 0 48px 0 48px;
		background-color: #2a3d45;
		border-radius: 16px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-start;
		height: 300px;
		padding: 50px 30px 20px 30px;
	}

	.pokemon-sprite {
		width: 200px;
		height: 200px;
		background-color: #ff6b6b;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 16px;
	}

	.pokemon-sprite img {
		width: 100px;
		height: 100px;
	}

	.pokemon-sprite-shiny {
		width: 130px;
		height: 130px;
		background-color: #4ecdc4;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 16px;
	}

	.pokemon-sprite-shiny img {
		width: 70px;
		height: 70px;
	}

	.type-wrapper {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}

	.pokemon-info {
		display: flex;
		flex-direction: column;
		height: 100%;
		gap: 30px;
	}

	.pokemon-info-text {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	h2 {
		font-size: 2rem;
		font-weight: 500;
	}

	.pokemon-info-text p {
		font-size: 1.2rem;
		font-weight: 400;
	}

	li {
		list-style: none;
		font-size: 1.2rem;
		font-weight: 400;
	}

	ul {
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 20px;
		height: 100%;
	}

	.stats-wrapper {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.stats-wrapper p {
		font-size: 1.2rem;
		font-weight: 500;
	}
</style>
