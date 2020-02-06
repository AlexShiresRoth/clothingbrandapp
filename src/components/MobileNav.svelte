<script>
  // your script goes here
  import { showSideMenu, cartStore, isMobile } from "./stores";
  import Cart from "./Cart.svelte";
  //props from Nav
  export let navLinks;
  const logo = "F.A.W";
  let rotated = false;
  let menu;
  const handleClickMenu = function(e) {
    return (
      $showSideMenu
        ? ((rotated = !rotated), showSideMenu.update(state => (state = false)))
        : (rotated = true),
      showSideMenu.update(state => (state = true))
    );
  };
  const closeMenu = () => {
    rotated = !rotated;
    return showSideMenu.update(state => (state = false));
  };

  window.addEventListener("resize", () =>
    showSideMenu.update(state => (state = false))
  );
</script>

<style lang="scss">
  /* your styles go here */
  nav {
    height: 4rem;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: fixed;
    box-shadow: 0 1px 1px darken(#fff, 5%);
    z-index: 1000;
    & .mobile-left-nav {
      & a {
        margin-left: 5vw;
        font-size: 5vw;
        font-family: "Lobster";
        font-weight: 100;
        text-decoration: none;
        color: #f3826f;
      }
    }
    & .mobile-right-nav {
      display: flex;
      margin-right: 5vw;
      &:hover {
        cursor: pointer;
      }
      & .mobile-menu {
        height: 1rem;
        width: 2rem;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & span {
          height: 3px;
          width: 100%;
          background: #333;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
  .rotated {
    &:nth-child(1) {
      transform: translate(0, 300%) rotate(45deg);
    }
    &:nth-child(2) {
      transform: translateX(90vh);
    }
    &:nth-child(3) {
      transform: translate(0, -125%) rotate(-45deg);
    }
  }
  .side-menu {
    display: flex;
    flex-direction: row;
    position: fixed;
    height: 100vh;
    width: 100vw;
    transition: all 0.3s ease-in-out;
    z-index: 9999;
    & .list-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 50%;
      background: #fff;
      box-shadow: 0 2px 2px darken(#fff, 20%);
      & a {
        text-align: center;
        width: 100%;
        color: #666;
        border-top: 1px solid #f3826f;
        padding: 1rem 0;
        &:last-child {
          border-bottom: 1px solid #f3826f;
        }
      }
    }
    & .close-side-menu {
      display: flex;
      width: 50%;
      height: 100%;
    }
  }

  .hidden {
    transform: translateX(-100vw);
  }
  .show {
    transform: translate(0);
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
<div class={$showSideMenu ? 'side-menu show' : 'side-menu hidden'}>
  <div class="list-container">
    {#each navLinks as item}
      <a>{item}</a>
    {/each}
    <Cart />
  </div>
  <div class="close-side-menu" on:click={closeMenu} on:touchstart={closeMenu} />
</div>
