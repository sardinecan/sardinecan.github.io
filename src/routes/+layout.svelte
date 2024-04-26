<!-- +layout.svelte -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/fonts.css';
  import '$lib/styles/style.css';
	import '$lib/styles/dracula.css';
</script>

<div class="content">
	<Header />

	<main>
		<slot />
	</main>
	
	<Footer />

</div>
	