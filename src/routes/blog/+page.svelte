<!-- src/routes/blog/+page.svelte -->
<script>
	export let data;
	import { dateToString } from '$lib/utils/dates.js'

	let publishedPosts = data.posts.filter(function (el) {
	  return el.meta.status.startsWith('unpublished');
	});
</script>

<h1>Blog</h1>
<div class="cards">
	{#each publishedPosts as publishedPost}
		<a class="card { publishedPost.meta.status.startsWith('unpublished') ? 'hidden' : '' }" href="{publishedPost.path}">
			<article>
				<span class="category">{publishedPost.meta.category}</span>
				<span class="title">{publishedPost.meta.title}</span>
				<span class="date">{dateToString(publishedPost.meta.date)}</span>
				{#if publishedPost.meta.author}
					<span class="speaker">{publishedPost.meta.author}</span>
				{/if}
			</article>
	</a>
	{/each}
</div>

