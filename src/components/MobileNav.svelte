<script>
  // your script goes here
  import { showSideMenu, cartStore, isMobile, showCartMobile } from "./stores";
  import Cart from "./Cart.svelte";
  import CartModal from "./CartModal.svelte";
  //props from Nav
  export let navLinks;
  ////////////////////
  const logo = "F.A.W";
  let menu;
  let rotated = false;
  const sideMenuController = () => {
    let sideMenu;
    const handleClickMenu = e => {
      sideMenu = document.querySelector(".side-menu");
      if ($showSideMenu) {
        rotated = !rotated;
        showSideMenu.update(state => (state = false));
        sideMenu.style.transform = `translateX(-100vw)`;
      } else {
        rotated = true;
        showSideMenu.update(state => (state = true));
        sideMenu.style.transform = `translateX(0vw)`;
      }
    };
    const closeMenu = () => {
      sideMenu = document.querySelector(".side-menu");
      if ($showSideMenu && rotated) {
        rotated = false;
        sideMenu.style.transform = `translateX(-100vw)`;
        showSideMenu.update(state => (state = false));
      }
    };

    return [handleClickMenu, closeMenu];
  };

  const sideMenuControl = sideMenuController();
  const handleClickMenu = sideMenuControl[0];
  const handleCloseMenu = sideMenuControl[1];

  const swipeController = () => {
    //User touch starting point
    let startPoint;
    let sideMenu;
    const handleSwipeStart = e => {
      startPoint = Math.round(e.touches[0].clientX);
    };
    const handleSwipeMove = e => {
      sideMenu = document.querySelector(".side-menu");
      let diff = Math.abs(startPoint - Math.round(e.touches[0].clientX)) / 1.5;
      if (diff < 100) {
        sideMenu.style.transform = `translateX(${-diff}vw)`;
      }
    };

    const swipeMenuEnd = e => {
      sideMenu = document.querySelector(".side-menu");
      //if swipe gesture is a close menu
      let swipeGestureDiff = Math.round(
        startPoint - e.changedTouches[0].clientX
      );
      if (swipeGestureDiff > 150) {
        rotated = false;
        sideMenu.style.transform = `translateX(-100vw)`;
        showSideMenu.update(state => (state = false));
      } else {
        rotated = true;
        sideMenu.style.transform = `translateX(0vw)`;
        showSideMenu.update(state => (state = true));
      }
    };
    return [handleSwipeStart, handleSwipeMove, swipeMenuEnd];
  };

  const swipeControl = swipeController();
  const handleSwipeStart = swipeControl[0];
  const handleSwipeMove = swipeControl[1];
  const swipeMenuEnd = swipeControl[2];

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
    z-index: 2000;
    & .list-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 50%;
      background: #fff;
      box-shadow: 0 2px 2px darken(#fff, 20%);
      z-index: 2001;
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
      z-index: 2001;
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
    <div class="mobile-menu" bind:this={menu} on:click={e => handleClickMenu()}>
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
  <div
    class="close-side-menu"
    on:click={e => handleCloseMenu(e)}
    on:touchstart={e => handleSwipeStart(e)}
    on:touchmove={e => handleSwipeMove(e)}
    on:touchend={e => swipeMenuEnd(e)} />
</div>
{#if $showCartMobile && $cartStore.length > 0}
  <CartModal />
{/if}
