<script>
	export let data;

	const dateOptions = {
  	year: 'numeric',
  	month: 'long',
  	day: 'numeric',
	};
</script>

<h1>Langages / HTML</h1>
<ul class="cards">
	{#each data.mdFiles as mdFile}
		<li>
			<a href="{mdFile.path}">
				<article>
					<span class="category">{mdFile.meta.language}</span>
					<span class="title">{mdFile.meta.title}</span>
					<span class="date">{new Date(mdFile.meta.date).toLocaleDateString('fr-FR', dateOptions)}</span>
				</article>
			</a>
		</li>
	{/each}
</ul>

