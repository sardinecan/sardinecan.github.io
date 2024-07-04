<!-- src/routes/reports/[slug]/+page.svelte -->
<script>
	export let data;
	import { dateToString } from '$lib/utils/dates.js'
</script>

<article>
	<p class="date">{ data.place ? dateToString(data.date) + ' | ' + data.place : dateToString(data.date) }</p>
	{#if data.speaker}
		<p class="speaker">{ data.speaker }</p>
	{/if}
	<svelte:component this={data.content} />
</article>