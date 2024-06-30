<!-- Footer.svelte -->
<script>
  import { theme } from '../../store';
  function toogleTheme(){
	console.log($theme);
	theme.set(!$theme);
  }
</script>

<footer>
  <nav>
		<ul>
			<li><a href="https://github.com/sardinecan/log">Github</a></li>
			<!--<li><a href="/contact">Contact</a></li>-->
			<li><button on:click={toogleTheme}>{ $theme? "Light" : "Dark" }</button></li>
		</ul>
  </nav>
</footer>

<!-- ... The rest of the file's contents here -->
<style>
	footer ul {
		padding: 1rem;
		margin: 0;
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1rem;
	}

	footer a {
		padding: 0.1em;
		text-decoration: none;
		color: inherit;
		color: var(--color-pink-1);
	}
</style>