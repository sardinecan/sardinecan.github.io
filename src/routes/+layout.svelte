<!-- src/routes/+layout.svelte -->
<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { theme } from '../store';
	import '$lib/styles/nord.css';
	import '$lib/styles/style.css';
	import '$lib/styles/fonts.css';
</script>

<svelte:head>
  {#if !$theme}
		<link rel="stylesheet" href="/styles/one-light.css" />
  {/if}
</svelte:head>

<div class="content" class:light={!$theme}>
	<Navigation />

	<main>
		<slot />
	</main>
	
	<Footer />

</div>
	