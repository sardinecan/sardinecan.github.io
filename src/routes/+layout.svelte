<!-- +layout.svelte -->
<script>
	import Header from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/dracula.css';
	import '$lib/styles/style.css';
	import '$lib/styles/fonts.css';
</script>

<div class="content">
	<Header />

	<main>
		<slot />
	</main>
	
	<Footer />

</div>
	