<!-- Header.svelte -->	
<header>
	<div class="titlebar">
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%">
			<defs>
				<pattern id="waves" patternUnits="userSpaceOnUse" width="230.4" height="221.7" patternTransform="scale(.5)">
				<defs>
					<g id="wave" stroke="orangered" fill="none"><!-- <g id="wave" stroke="#000080" fill="none"> -->
						<circle fill="white" stroke-width="8" r="106.7" />
						<circle stroke-width="9" r="81" />
						<circle stroke-width="8" r="55.3" />
						<circle stroke-width="7" r="32.5" />
						<circle stroke-width="7" r="13.2" />
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
		<h1>L·0·G</h1>
	</div>
	<nav>
		<a href="/">home</a>
		<ul>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/reports">Comptes rendus</a></li>
			<li><a href="/cheatsheets">Antisèches</a></li>
		</ul>
	</nav>
</header>

<!-- ... The rest of the file's contents here -->
<style>

	div.titlebar {
		position: relative;
		min-height: 12em;
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
		font-size: 4em;
		background: rgba(255, 255, 255, .7);
		color: var(--subColor);
	}

	header nav {
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		background-color: var(--subColor);
	}

	header ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	header a {
		padding: 0.1em;
		text-decoration: none;
		color: inherit;
		color: white;
	}
	
</style>