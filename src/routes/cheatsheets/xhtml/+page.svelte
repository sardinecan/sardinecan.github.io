<script>
	export let data;
	import { dateToString } from '$lib/utils/dates.js';
	import { page } from '$app/stores';  

	let tokenizedPath = $page.url.pathname.split('/');
	let folder = tokenizedPath[2];
	let visibleData = data.mdFiles.filter(mdFile => mdFile.category === folder);
</script>

<h1>Langages / HTML</h1>
<ul class="cards">
	{#each visibleData as mdFile}
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

