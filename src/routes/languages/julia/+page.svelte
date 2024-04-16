<script>
	export let data;
</script>

<h1>Langage / Julia</h1>
<ul>
	{#each data.posts as post}
		<li>
			<a href={post.path}>{post.meta.title}</a>
			<!-- <small>Published {post.meta.date}</small> -->
		</li>
	{/each}
</ul>

