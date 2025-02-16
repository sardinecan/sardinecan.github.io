<!-- Header.svelte -->
<script>
  import { page } from '$app/stores';  

	import { theme } from '../../store';
  function toogleTheme(){
	console.log($theme);
	theme.set(!$theme);
  }
</script>

<nav>
	<!--<a href="/" class="home"><img src="{svg_home}"/></a>-->
	<a href="/"><h1>/log</h1></a>
	<ul>
		<li><a href="/reports" class:active="{$page.url.pathname.includes("reports")}">Comptes rendus</a></li>
		<li><a href="/notes" class:active="{$page.url.pathname.includes("notes")}">Notes</a></li>
		<li><a href="/projets" class:active="{$page.url.pathname.includes("projets")}">Projets</a></li>
		<!-- <li><button on:click={toogleTheme}>{ $theme? "☼" : "☾" }</button></li> -->
		<li><button class="switch" role="switch" aria-checked={$theme} on:click={toogleTheme}/></li>
	</ul>
</nav>
<!--<p>Path : {$page.url.pathname}</p>-->

<!-- ... The rest of the file's contents here -->
<style>

	.switch {
		vertical-align: bottom;
    width: 3em;
    height: 1.6em;
    position: relative;
    margin: 0 0 0 0.5em;
    background: var(--color-light-red);
    border: none;
		border-radius: 25px;
  }

	.switch::before {
  	content: '☀';
		vertical-align: baseline;
    position: absolute;
    width: 1.3em;
    height: 1.3em;
    background: var(--color-white);
    top: 0.13em;
    right: 1.5em;
		border-radius: 25px;
    transition: transform 0.3s;
  }

	.switch[aria-checked='true']{
    background-color: var(--color-purple-1);
  }

	.switch[aria-checked='true']::before{
		content: '☾';
		color: var(--color-purple-1);
    transform: translateX(1.3em);
    transition: transform 0.3s;
  }

	nav h1 {
		position: relative;
		margin: 0 0 0 0.5em;
		align-self: center;
		padding: 0.1em;
		font-family: var(--mainFont);
		font-size: 1.2em;
		color: light-dark(var(--color-light-white), var(--color-pink-1));
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
  background: light-dark(var(--color-light-white), var(--color-white));
  display: inline-block;
  animation: cursor-blink 1.5s steps(1) infinite;
}

nav h1::before {
  content: "❯ ";
	color: light-dark(var(--color-light-red), var(--color-green));
}

nav {
	padding: 1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	background-color: light-dark(var(--color-light-grey), var(--color-dark-2));
	position: sticky;
	top: 0;		
	z-index: 2;
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
	color: light-dark(var(--color-light-white), var(--color-pink-1));
}

nav a.active {
	color: light-dark(var(--color-light-red), var(--color-green));
}


	/* for filter to change SVG color https://codepen.io/sosuke/pen/Pjoqqp */
	/*header + nav .home img {
		height: 1em;		
		filter: invert(32%) sepia(82%) saturate(3323%) hue-rotate(3deg) brightness(102%) contrast(109%);
	}*/
	
</style>
