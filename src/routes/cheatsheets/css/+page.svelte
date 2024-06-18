<script>
	export let data;
	import { dateToString } from '$lib/utils/dates.js'
</script>

<h1>Langages / CSS</h1>
<ul class="cards">
	{#each data.mdFiles as mdFile}
		<li>
			<a href="{mdFile.path}">
				<article>
					<span class="category">{mdFile.meta.language}</span>
					<span class="title">{mdFile.meta.title}</span>
					<span class="date">{dateToString(mdFile.meta.date)}</span>
				</article>
			</a>
		</li>
	{/each}
</ul>