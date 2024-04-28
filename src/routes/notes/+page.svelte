<script>
	export let data;
	import { dateToString } from '$lib/utils/dates.js'

	/* https://svelte.dev/repl/0429bd69748e44cdaeb8074c982f967d?version=3.41.0 */
	let search = undefined;
	
	$: visibleNotes = search ?
		data.notes.filter(note => {
			return (
				note.meta.title.toLowerCase().match(`${search}.*`) 
				|| note.meta.category.toLowerCase().match(`${search}.*`)
				|| note.meta.keywords.toLowerCase().match(`${search}.*`)
		)
		}) : data.notes;


</script>

<h1>Notes</h1>
<input type="text" bind:value={search} placeholder="rechercher" />

<ul class="cards">
	{#each visibleNotes as note}
		<li>
			<a href="{note.path}">
				<article>
					<span class="category">{note.meta.category}</span>
					<span class="title">{note.meta.title}</span>
					<span class="date">{dateToString(note.meta.date)}</span>
				</article>
			</a>
		</li>
	{/each}
</ul>