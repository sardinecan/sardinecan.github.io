<script>
	export let data;
</script>

<h1>Comptes rendus</h1>
<ul>
	{#each data.reports as report}
		<li>
			<a href={report.path}>{report.meta.title}</a>
			<!-- <small>Published {post.meta.date}</small> -->
		</li>
	{/each}
</ul>

