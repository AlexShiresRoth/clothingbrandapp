<script>
  // your script goes here
  const navLinks = ["Men", "Women", "Location", "About", "Contact"];
</script>

<style>
  /* your styles go here */
  nav {
    background: #fff;
    height: 5rem;
    max-width: 1446px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>

<nav>
  <div class="left-nav" />
  <div class="right-nav">
    {#each navLinks as link}
      <a>{link}</a>
    {/each}
  </div>
</nav>
