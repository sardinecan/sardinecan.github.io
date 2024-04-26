<script>
	export let data;
	import { dateToString } from '$lib/utils/dates.js'
</script>

<h1>Notes</h1>
<ul class="cards">
	{#each data.notes as note}
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