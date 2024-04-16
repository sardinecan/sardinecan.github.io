<script>
	export let data;
</script>

<h1>Langages / HTML</h1>
<ul>
	{#each data.mdFiles as mdFile}
		<li>
			<a href={mdFile.path}>{mdFile.meta.title}</a>
			<!-- <small>Published {post.meta.date}</small> -->
		</li>
	{/each}
</ul>

