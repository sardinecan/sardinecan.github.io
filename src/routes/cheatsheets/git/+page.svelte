<script>
	export let data;
	import { dateToString } from '$lib/utils/dates.js';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let tokenizedPath = $page.url.pathname.split('/');
	let folder = tokenizedPath[2];
	let filteredData = data.mdFiles.filter(mdFile => mdFile.category === folder);
	let numberOfFilteredData = filteredData.length;
	console.log("nb de fichiers", numberOfFilteredData);
	if(numberOfFilteredData == 1) {
		console.log("redirection vers : ", filteredData[0].path);
		goto(filteredData[0].path);
	};
</script>

<h1>{ folder.toUpperCase() }</h1>
<ul class="cards">
	{#each filteredData as mdFile}
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