<script lang="ts">
	import type { Result } from "../types/pokedex";

	export let Pokemon:Result
</script>
	<div>
		<a href="{Pokemon.url}">{Pokemon.name}</a>
	</div>
<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 150px;
		background-color: #D9D9D9;
		border-radius: .25em;
	}
</style>
