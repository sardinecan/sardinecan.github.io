<!-- src/routes/cheatsheets/julia/[slug]/+page.svelte -->
<script>
	export let data;
	import { dateToString } from '$lib/utils/dates.js'
</script>

<article>
	<p class="date">{dateToString(data.date)}</p>
	<svelte:component this={data.content} />
</article>