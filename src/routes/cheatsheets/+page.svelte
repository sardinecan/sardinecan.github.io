<script>
	export let data;
  // récupération des valeurs uniques des catégories pour récupérer les dossiers.
  const folders = [...new Set(data.cheatsheets.map(item => item.category))];
  console.log(folders);
</script>

<h1>Antisèches</h1>
<nav>
  <ul class="cards">
    {#each folders.sort() as folder}  
    <li>
      <a href="/cheatsheets/{folder}">
        <article>
          <span class="title">{ folder }</span>
        </article>
      </a>
    </li>
    {/each}
  </ul>
</nav>
