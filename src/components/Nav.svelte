<script>
  // your script goes here
  import { cartStore, cartState } from "./stores.js";
  const logo = "F.A.W";
  const navLinks = ["Men", "Women", "Location", "About", "Contact"];

  let cartAmount;

  let addToStore = cartStore.subscribe(val => {
    return (cartAmount = val.length);
  });
  //Objects within the cart
  let cart;
  //State of cart if user is hovering or not
  let show;
  let cartArray = cartStore.subscribe(val => (cart = val));
  const handleShowCart = e => cartState.update(state => (show = true));
  const handleRemoveCart = e => cartState.update(state => (show = false));
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
</style>

<nav>
  <div class="left-nav">
    <a>{logo}</a>
  </div>
  <div class="right-nav">
    {#each navLinks as link}
      <a>{link}</a>
    {/each}
    <a on:mouseenter={handleShowCart} on:mouseleave={handleRemoveCart}>
      Cart({cartAmount})
      {#if show}
        {#each cart as item}
          <p>{item.type}</p>
        {/each}
      {/if}
    </a>
  </div>
</nav>
