<script>
  // your script goes here
  //DRY up this component
  import { onMount, afterUpdate } from "svelte";
  import MobileNav from "./MobileNav.svelte";
  import Cart from "./Cart.svelte";
  import { navState, isMobile, navIntersect } from "./stores.js";

  const logo = "F.A.W";
  export let navLinks = ["Men", "Women", "Location", "About", "Contact"];

  //show or hide nav when user scrolls
  const navController = () => {
    let isHovering = false;
    const handleScroll = () => {
      const target = document.querySelector("#header");
      let observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio <= 0.6) {
              navIntersect.update(state => (state = true));
              navState.update(state => (state = true));
            } else {
              navIntersect.update(state => (state = false));
              navState.update(state => (state = false));
            }
          });
        },
        {
          rootMargin: "0px",
          threshold: [0.5, 0.5, 0.5, 0.5]
        }
      );
      if (target) observer.observe(target);
    };

    const handleNavState = e => {
      isHovering = true;
      return navState.update(state =>
        $navIntersect && isHovering
          ? null
          : !$navIntersect && isHovering
          ? (state = true)
          : (state = true)
      );
    };

    return [handleScroll, handleNavState];
  };

  const navControl = navController();
  const handleScroll = navControl[0];
  const handleNavState = navControl[1];
  window.addEventListener("scroll", handleScroll);

  //handle mobile screen sizing
  const mobileController = () => {
    const handleMobileState = () => {
      return window.innerWidth <= 800
        ? isMobile.update(state => (state = true))
        : isMobile.update(state => (state = false));
    };
    return [handleMobileState];
  };
  const mobileControl = mobileController();
  const handleMobileState = mobileControl[0];
  window.addEventListener("resize", () => handleMobileState());

  onMount(() => {
    handleMobileState();
  });
</script>

<style lang="scss">
  /* your styles go here */
  .transparent-nav {
    background: transparent;
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    transition: all 0.3s ease-in-out;
    z-index: 9999;
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
  .white-nav {
    background: #fff;
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 1px 1px darken(#eee, 5%);
    z-index: 9999;
    & a {
      cursor: pointer;
      color: #666;
    }
    & .left-nav a {
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
      text-decoration: none;
    }
  }
  .right-nav {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    & a {
      font-size: 1vw;
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &:hover {
        cursor: pointer;
        text-decoration: none;
        color: #000;
      }
      &::after {
        position: absolute;
        content: "";
        width: 0px;
        background: #000;
        height: 3px;
        transition: all 0.3s ease-in-out;
        display: block;
        bottom: 0;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .left-nav {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      & a {
        margin-left: 2vw;
        font-size: 4vw;
        font-family: "Lobster";
        font-weight: 100;
        text-decoration: none;
      }
    }
    .right-nav {
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
      & a {
        font-size: 1vw;
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &:hover {
          cursor: pointer;
          text-decoration: none;
          color: #000;
        }
        &::after {
          position: absolute;
          content: "";
          width: 0px;
          background: #000;
          height: 3px;
          transition: all 0.3s ease-in-out;
          display: block;
          bottom: 0;
        }
        &:hover::after {
          width: 100%;
        }
      }
    }
  }
</style>

{#if $isMobile}
  <MobileNav {navLinks} />
{:else}
  <nav
    class={$navIntersect ? 'white-nav' : 'transparent-nav'}
    on:mouseenter={handleNavState}
    on:mouseleave={handleNavState}>
    <div class="left-nav">
      <a>{logo}</a>
    </div>
    <div class="right-nav">
      {#each navLinks as link}
        <a>{link}</a>
      {/each}
      <Cart />
    </div>
  </nav>
{/if}
