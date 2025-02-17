<!-- src/routes/+page.svelte -->
<script>
	export let data;
  import postIcon from '$lib/assets/material/post.svg'
  import noteIcon from '$lib/assets/material/note.svg'
  import reportIcon from '$lib/assets/material/report.svg'
	import { dateToString } from '$lib/utils/dates.js'

  console.log(data)

	/* https://svelte.dev/repl/0429bd69748e44cdaeb8074c982f967d?version=3.41.0 */
  const notes = data.notes.slice(0, 3)
  const reports = data.reports.slice(0, 3)

  /* concat notes-report => note used for now */
	let content = data.notes.concat(data.reports)
  const sortedContent = content.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

  var recent = sortedContent.slice(0, 5)

  function getDocumentType(path) {
    let src;
    if(path.startsWith('/notes')) { src = ["note", noteIcon]; }
    else if(path.startsWith('/reports')) { src = ["report", reportIcon]; }
    return src
  };

	
</script>

<h1>Hello World!</h1>
<!--
<p>~/log/blog</p>
<ul>
  {#each blog as post, i}
    {#if i==blog.length-1 }
      <li>└── <a href="{post.path}"><!-/-<span class="date">{dateToString(note.meta.date)}</span>-/-><span class="title">{post.meta.title}</span></a></li>
    {:else}
      <li>├── <a href="{post.path}"><span class="title">{post.meta.title}</span></a></li>
    {/if}
  {/each}
</ul>
<p>~/log/notes</p>
<ul>
  {#each notes as note, i}
    {#if i==notes.length-1 }
      <li>└── <a href="{note.path}"><span class="title">{note.meta.title}</span></a></li>
    {:else}
      <li>├── <a href="{note.path}"><span class="title">{note.meta.title}</span></a></li>
    {/if}
  {/each}
</ul>
<p>~/log/reports</p>
<ul>
  {#each reports as report, i}
    {#if i==reports.length-1 }
      <li>└── <a href="{report.path}"><span class="title">{report.meta.title}</span></a></li>
    {:else}
      <li>├── <a href="{report.path}"><span class="title">{report.meta.title}</span></a></li>
    {/if}
  {/each}
</ul>
-->
<p>~/log/recent</p>
<ul class="desc">
  <li><img alt="report" class="report" src="{ reportIcon }"/>c.r.</li>
  <li><img alt="note" class="note" src="{ noteIcon }"/>note</li>
</ul>
<ul>
  {#each recent as report, i}
    {#if i==recent.length-1 }
      <li>└──<img alt="{ getDocumentType(report.path)[0] }" class="{ getDocumentType(report.path)[0] }" src="{ getDocumentType(report.path)[1] }"/><a href="{report.path}"><!--<span class="date">{dateToString(note.meta.date)}</span>--><span class="title">{report.meta.title}</span></a></li>
    {:else}
      <li>├──<img alt="{ getDocumentType(report.path)[0] }" class="{ getDocumentType(report.path)[0] }" src="{ getDocumentType(report.path)[1] }"/><a href="{report.path}"><!--<span class="date">{dateToString(note.meta.date)}</span>--><span class="title">{report.meta.title}</span></a></li>
    {/if}
  {/each}
</ul>


<style>
h1 {
  font-size: 2.5rem;
  overflow: hidden;
  white-space: nowrap; 
  width: 0;
  animation: 
    typing 2s steps(25, end) forwards;
}
@keyframes typing {
from { width: 0 }
to { width: 100% }
}

li {
  list-style: none;
}

ul.desc {
  margin: 0;
  font-size: .8em;
  display :flex;
  gap: 1em;
}

img {
  width: 1em;
  vertical-align:sub;
  margin: 0 2px 0;
}

img.report {
  filter: invert(84%) sepia(10%) saturate(6331%) hue-rotate(315deg) brightness(101%) contrast(101%);
}

img.note {
  filter: invert(59%) sepia(44%) saturate(645%) hue-rotate(302deg) brightness(94%) contrast(107%);
}

img.post {
  filter: invert(63%) sepia(39%) saturate(819%) hue-rotate(211deg) brightness(102%) contrast(94%);
}


</style>
