<script>
	export let data;

	const dateOptions = {
  	year: 'numeric',
  	month: 'long',
  	day: 'numeric',
	};
</script>

<h1>Notes</h1>
<ul class="cards">
	{#each data.notes as note}
		<li>
			<a href="{note.path}">
				<article>
					<span class="category">{note.meta.category}</span>
					<span class="title">{note.meta.title}</span>
					<span class="date">{new Date(note.meta.date).toLocaleDateString('fr-FR', dateOptions)}</span>
				</article>
			</a>
		</li>
	{/each}
</ul>