<script>
  // your script goes here
  const logo = "F.A.W";
  const navLinks = ["Men", "Women", "Location", "About", "Contact"];
</script>

<style lang="scss">
  /* your styles go here */
  nav {
    background: #fff;
    height: 5rem;
    max-width: 1446px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    box-shadow: 0 2px 2px #666;
  }
  a {
    color: #666;
  }
  .left-nav {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    & a {
      margin-left: 2vw;
      font-size: 2vw;
    }
  }
  .right-nav {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
</style>

<nav>
  <div class="left-nav">
    <a>{logo}</a>
  </div>
  <div class="right-nav">
    {#each navLinks as link}
      <a>{link}</a>
    {/each}
  </div>
</nav>
