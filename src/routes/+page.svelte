<!-- src/routes/+page.svelte -->
<script>
	export let data;
	import { dateToString } from '$lib/utils/dates.js'

  console.log(data)

	/* https://svelte.dev/repl/0429bd69748e44cdaeb8074c982f967d?version=3.41.0 */
  const notes = data.notes.slice(0, 3)
  const blog = data.blog.slice(0, 3)
  const reports = data.reports.slice(0, 3)

  /* concat notes-blog-report => note used for now */
	let content = notes.concat(blog).concat(reports)
  const sortedContent = content.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});
	
</script>

<h1>Hello World!</h1>
<h2>Recent</h2>
<p>~/log/blog</p>
<ul>
  {#each blog as post, i}
    {#if i==blog.length-1 }
      <li>└── <a href="{post.path}"><!--<span class="date">{dateToString(note.meta.date)}</span>--><span class="title">{post.meta.title}</span></a></li>
    {:else}
      <li>├── <a href="{post.path}"><!--<span class="date">{dateToString(note.meta.date)}</span>--><span class="title">{post.meta.title}</span></a></li>
    {/if}
  {/each}
</ul>
<p>~/log/notes</p>
<ul>
  {#each notes as note, i}
    {#if i==notes.length-1 }
      <li>└── <a href="{note.path}"><!--<span class="date">{dateToString(note.meta.date)}</span>--><span class="title">{note.meta.title}</span></a></li>
    {:else}
      <li>├── <a href="{note.path}"><!--<span class="date">{dateToString(note.meta.date)}</span>--><span class="title">{note.meta.title}</span></a></li>
    {/if}
  {/each}
</ul>
<p>~/log/reports</p>
<ul>
  {#each reports as report, i}
    {#if i==reports.length-1 }
      <li>└── <a href="{report.path}"><!--<span class="date">{dateToString(note.meta.date)}</span>--><span class="title">{report.meta.title}</span></a></li>
    {:else}
      <li>├── <a href="{report.path}"><!--<span class="date">{dateToString(note.meta.date)}</span>--><span class="title">{report.meta.title}</span></a></li>
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
</style>