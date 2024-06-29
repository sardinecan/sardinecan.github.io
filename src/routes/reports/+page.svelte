<script>
	export let data;
	import { dateToString } from '$lib/utils/dates.js'
	
	/* pour filtrer les comptes rendus*/
	/*let workshopReports = data.reports.filter(function (el) {
	  return el.meta.category.includes('workshop');
	});

	let conferenceReports = data.reports.filter(function (el) {
	  return el.meta.category.includes('conference');
	});*/

	let search = undefined;
	
	$: visibleReports = search ?
		data.reports.filter(report => {
			return (
				report.meta.title.toLowerCase().match(`${search}.*`) 
				|| report.meta.category.toLowerCase().match(`${search}.*`) 
				|| report.meta.speaker.toLowerCase().match(`${search}.*`)
			)
		}) : data.reports;

	function getSpeakers(speaker) {
		var speakers = speaker.split(";")
		var speakers = speakers.map(speaker => normalizeSpace(speaker));
		if(speakers.length > 3){
			return speakers[0] + ", " + speakers[1] + ", " + speakers[2] + " et al."
		} else {
			return speakers.join(', ')
		}
	};

	function normalizeSpace(str) {
	// Strip leading and trailing white-space
	return str.replace(/^\s*|\s*$/g, "");
	};

</script>

<h1>Comptes rendus</h1>
<input class="filter" type="text" bind:value={search} placeholder="filtrer" />
<div class="cards">
	{#each visibleReports as report}
		<a class="card" href="{report.path}">
			<article>
				<span class="category">{report.meta.category}</span>
				<span class="title">{report.meta.title}</span>
				<span class="date">
					{report.meta.place ? dateToString(report.meta.date) + ' | ' + report.meta.place : dateToString(report.meta.date)}
				</span>
				{#if report.meta.speaker}
				<span class="speaker">{getSpeakers(report.meta.speaker)}</span>
				{/if}
			</article>
		</a>
	{/each}
	</div>
<!--<h2>Ateliers</h2>
<ul>
	{#each workshopReports as report}
		<li>
			{report.meta.date} <a href={report.path}>{report.meta.title}</a>
		</li>
	{/each}
</ul>

<h2>Conférences</h2>
<ul>
	{#each conferenceReports as report}
		<li>
			{report.meta.date} <a href={report.path}>{report.meta.title}</a>
		</li>
	{/each}
</ul>-->

