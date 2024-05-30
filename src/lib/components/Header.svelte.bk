<!-- Header.svelte -->
<script>
  import svg_home from '$lib/assets/picol/home.svg';
	import { page } from '$app/stores';  
</script>

<header>
	<div class="titlebar">
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%">
			<defs>
				<pattern id="waves" patternUnits="userSpaceOnUse" width="230.4" height="221.7" patternTransform="scale(.5)">
				<defs>
					<g id="wave" stroke="#272C4D" fill="none"><!-- <g id="wave" stroke="#000080" fill="none"> -->
						<circle fill="white" stroke-width="5" r="106.7" />
						<circle stroke-width="4" r="81" />
						<circle stroke-width="4" r="55.3" />
						<circle stroke-width="4" r="32.5" />
						<circle stroke-width="4" r="13.2" />
					</g>
				</defs>
				<use x="229.9" y="0.7" xlink:href="#wave" />
				<use x="114.9" y="55.3" xlink:href="#wave" />
				<use x="-114.9" y="55.3" xlink:href="#wave" />
				<use x="0" y="111.3" xlink:href="#wave" />
				<use x="229.9" y="111.3" xlink:href="#wave" />
				<use x="114.9" y="166.4" xlink:href="#wave" />
				<use x="-114.9" y="166.4" xlink:href="#wave" />
				<use x="0" y="222.2" xlink:href="#wave" />
				<use x="345.1" y="166.4" xlink:href="#wave" />
				<use x="229.9" y="222.2" xlink:href="#wave" />
				<use x="114.9" y="277.2" xlink:href="#wave" />
				<use x="-114.9" y="277.2" xlink:href="#wave" />
				<use x="345.1" y="277.2" xlink:href="#wave" />
				</pattern>
			</defs>
		 <rect width="100%" height="100%" fill="url(#waves)" />
		</svg>
		<h1>❯/log</h1>
	</div>
</header>
<nav>
	<!--<a href="/" class="home"><img src="{svg_home}"/></a>-->
	<a href="/"><span class="headingColor">~</span>/home</a>
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

	div.titlebar {
		position: relative;
		height: 7em;
		display: flex;
	}

	div.titlebar > svg {
		position: absolute;
	}

	div.titlebar > h1 {
		position: relative;
		margin: 0 0 0 0.5em;
		align-self: center;
		padding: 0.1em;
		font-family: var(--monospaceFont);
		font-size: 3.5em;
		background: rgba(255, 255, 255, .7);
		color: var(--mainColor);
		display: flex;
	  align-items:baseline;
 		gap: 0.1em;
	}

	/*header + nav > a {
		display: flex;
	  align-items: center;
 		gap: 0.1em;
	}*/


@keyframes cursor-blink {
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
  100% { opacity: 1.0; }
}

div.titlebar > h1::after/*,
header + nav > a::after*/ {
  content: "";
  width: 0.5em;
  height: 0.1em;
  background: var(--headingColor);
  display: inline-block;
  animation: cursor-blink 1.5s steps(1) infinite;
}

	header + nav {
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		background-color: var(--subColor);
  	position: sticky;
  	top: 0;
		
	}

	header + nav ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	header + nav a {
		padding: 0.1em;
		text-decoration: none;
		color: white;
	}

	header + nav a.active {
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