<!-- +layout.svelte -->
<script>
	import Header from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { theme } from '../store';
	import '$lib/styles/dracula.css';
	import '$lib/styles/style.css';
	import '$lib/styles/fonts.css';
</script>

<div class="content" class:light={!$theme}>
	<Header />

	<main>
		<slot />
	</main>
	
	<Footer />

</div>
	