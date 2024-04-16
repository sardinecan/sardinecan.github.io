<script>
	export let data;

	let publishedPosts = data.posts.filter(function (el) {
	  return el.meta.status.startsWith('published');
	});
</script>

<h1>Blog</h1>
<ul>
	{#if publishedPosts.length > 0}
		{#each publishedPosts as post}
			<li>
				<a href={post.path}>{post.meta.title}</a>
			</li>
		{/each}
	{:else}
		<li>Aucun post pour le moment…  ¯\_(ツ)_/¯</li>
	{/if}
	
</ul>

