<script>
	export let data;
	
	/* pour filtrer les comptes rendus*/
	let workshopReports = data.reports.filter(function (el) {
	  return el.meta.event.includes('workshop');
	});

	let conferenceReports = data.reports.filter(function (el) {
	  return el.meta.event.includes('conference');
	});

</script>

<h1>Comptes rendus</h1>
<h2>Ateliers</h2>
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
</ul>

