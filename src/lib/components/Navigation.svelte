<!-- Header.svelte -->
<script>
  import svg_home from '$lib/assets/picol/home.svg';
	import { page } from '$app/stores';  
</script>

<nav>
	<!--<a href="/" class="home"><img src="{svg_home}"/></a>-->
	<a href="/"><h1>/log</h1></a>
	<ul>
		<li><a href="/blog" class:active="{$page.url.pathname.includes("blog")}">Blog</a></li>
		<li><a href="/reports" class:active="{$page.url.pathname.includes("reports")}">Comptes rendus</a></li>
		<li><a href="/cheatsheets" class:active="{$page.url.pathname.includes("cheatsheets")}">Antisèches</a></li>
		<li><a href="/notes" class:active="{$page.url.pathname.includes("notes")}">Notes</a></li>
	</ul>
</nav>
<!--<p>Path : {$page.url.pathname}</p>-->

<!-- ... The rest of the file's contents here -->
<style>

	nav h1 {
		position: relative;
		margin: 0 0 0 0.5em;
		align-self: center;
		padding: 0.1em;
		font-family: var(--monospaceFont);
		font-size: 1.2em;
		background: rgba(255, 255, 255, .7);
		color: var(--mainColor);
		display: flex;
	  align-items:baseline;
 		gap: 0.1em;
	}


@keyframes cursor-blink {
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
  100% { opacity: 1.0; }
}

nav h1::after/*,
header + nav > a::after*/ {
  content: "";
  width: 0.5em;
  height: 0.1em;
  background: var(--headingColor);
  display: inline-block;
  animation: cursor-blink 1.5s steps(1) infinite;
}

nav {
	padding: 1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	background-color: var(--subColor);
	position: sticky;
	top: 0;		
}

nav ul {
	margin: 0;
	list-style-type: none;
	display: flex;
	gap: 1rem;
}

nav a {
	padding: 0.1em;
	text-decoration: none;
	color: white;
}

nav a.active {
	text-decoration: underline solid var(--headingColor) 0.2rem;
}


	/* for filter to change SVG color https://codepen.io/sosuke/pen/Pjoqqp */
	/*header + nav .home img {
		height: 1em;		
		filter: invert(32%) sepia(82%) saturate(3323%) hue-rotate(3deg) brightness(102%) contrast(109%);
	}*/

.headingColor {
	color: var(--headingColor);
}
	
</style>