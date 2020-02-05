<script>
  // your script goes here
  const logo = "F.A.W";
  let rotated = false;
  let menu;
  const handleClickMenu = function(e) {
    if (e.target && e.target.closest("div").classList.contains("mobile-menu")) {
      return rotated ? (rotated = false) : (rotated = true);
    }
  };
</script>

<style lang="scss">
  /* your styles go here */
  nav {
    height: 5rem;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    & .mobile-left-nav {
      & a {
        margin-left: 2vw;
        font-size: 5vw;
        font-family: "Lobster";
        font-weight: 100;
        text-decoration: none;
        color: #f3826f;
      }
    }
    & .mobile-right-nav {
      display: flex;
      margin-right: 2vw;
      &:hover {
        cursor: pointer;
      }
      & .mobile-menu {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 9vw;
        height: 2.5vh;

        & span {
          border-radius: 3px;
          width: 100%;
          height: 2px;
          background: #333;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }

  .rotated:nth-child(1) {
    transform-origin: 15% 30%;
    transform: rotate(45deg);
  }
  .rotated:nth-child(2) {
    transform-origin: 0% 0%;
    transform: translateX(90vh);
  }
  .rotated:nth-child(3) {
    transform-origin: 20% 50%;
    transform: rotate(-45deg);
  }
</style>

<nav>
  <div class="mobile-left-nav">
    <a>{logo}</a>
  </div>
  <div class="mobile-right-nav">
    <div class="mobile-menu" bind:this={menu} on:click={handleClickMenu}>
      <span class:rotated />
      <span class:rotated />
      <span class:rotated />
    </div>
  </div>
</nav>
