<script>
	export let data;
</script>

<h1>Langages / Julia</h1>
<ul>
	{#each data.mdFiles as mdFile}
		<li>
			<a href={mdFile.path}>{mdFile.meta.title}</a>
		</li>
	{/each}
</ul>

