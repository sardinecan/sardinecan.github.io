<script>
	export let data;
</script>

<article>
	<p>date : {data.date}</p>
	<h1>{data.title}</h1>
	<svelte:component this={data.content} />
</article>