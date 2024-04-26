<script>
	export let data;
	import { dateToString } from '$lib/utils/dates.js'
	
	/* pour filtrer les comptes rendus*/
	let workshopReports = data.reports.filter(function (el) {
	  return el.meta.category.includes('workshop');
	});

	let conferenceReports = data.reports.filter(function (el) {
	  return el.meta.category.includes('conference');
	});
</script>

<h1>Comptes rendus</h1>
<ul class="cards">
	{#each data.reports as report}
		<li>
			<a href="{report.path}">
				<article>
					<span class="category">{report.meta.category}</span>
					<span class="title">{report.meta.title}</span>
					<span class="date">
						{report.meta.place ? dateToString(report.meta.date) + ' | ' + report.meta.place : dateToString(report.meta.date)}
					</span>
					{#if report.meta.speaker}
						<span class="speaker">{report.meta.speaker}</span>
					{/if}
				</article>
			</a>
		</li>
	{/each}
</ul>
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

