<script>
	export let data;
</script>

<h1>Notes</h1>
<ul>
	{#each data.notes as note}
		<li>
			<a href={note.path}>{note.meta.title}</a>
		</li>
	{/each}
</ul>