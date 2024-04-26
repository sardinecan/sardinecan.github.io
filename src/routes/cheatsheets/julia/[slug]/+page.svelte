<script>
	export let data;
	
	const dateOptions = {
  	year: 'numeric',
  	month: 'long',
  	day: 'numeric',
	};
</script>

<article>
	<p class="date">{new Date(data.date).toLocaleDateString('fr-FR', dateOptions)}</p>
	<h1>{data.title}</h1>
	<svelte:component this={data.content} />
</article>