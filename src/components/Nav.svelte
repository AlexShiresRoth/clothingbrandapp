<script>
  // your script goes here
  const logo = "F.A.W";
  const navLinks = ["Men", "Women", "Location", "About", "Contact", "Cart"];
  export let cart = 0;
</script>

<style lang="scss">
  /* your styles go here */
  nav {
    background: transparent;
    height: 5rem;
    max-width: 1446px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #fff;
    }
    &:hover a {
      cursor: pointer;
      color: #666;
    }
    &:hover .left-nav a {
      color: #f3826f;
    }
  }
  a {
    color: #fff;
    font-family: "Muli";
  }
  .left-nav {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    & a {
      margin-left: 2vw;
      font-size: 2vw;
      font-family: "Lobster";
      font-weight: 100;
      text-decoration: underline;
    }
  }
  .right-nav {
    display: flex;
    width: 100%;
    justify-content: space-around;
    & a {
      font-size: 1vw;
      &:hover {
        cursor: pointer;
        text-decoration: none;
        color: #000;
      }
    }
  }
</style>

<nav>
  <div class="left-nav">
    <a>{logo}</a>
  </div>
  <div class="right-nav">
    {#each navLinks as link}
      <a>{link === 'Cart' ? `${link}(${cart})` : link}</a>
    {/each}
  </div>
</nav>
