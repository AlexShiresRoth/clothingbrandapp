<script>
  // your script goes here
  //DRY up this component
  import { onMount, afterUpdate } from "svelte";
  import MobileNav from "./MobileNav.svelte";
  import { cartStore, cartState, navState, isMobile } from "./stores.js";
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

  const handleRemoveFromCart = (e, item) => {
    cartStore.update(
      currentCart =>
        (cart = currentCart.filter(cartItem => cartItem.id !== item.id))
    );
  };

  //show or hide nav when user scrolls
  let navShowState;

  window.addEventListener("scroll", () => {
    const target = document.querySelector("#header");
    let observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio <= 0.6) {
            navState.update(state => (navShowState = true));
          } else navState.update(state => (navShowState = false));
        });
      },
      {
        rootMargin: "0px",
        threshold: [0.5, 0.5, 0.5, 0.5]
      }
    );
    if (target) observer.observe(target);
  });

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
    .cart-link {
      position: relative;
      display: flex;
      flex-direction: column;
      & .cart {
        position: absolute;
        min-width: 10rem;
        top: 100%;
        left: -100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: #fff;
        & .cart-item {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid #eee;
          padding: 0.5rem 0;
          & .cart-row {
            display: flex;
            flex-direction: row;
            & .detail-container {
              & p {
                font-size: 16px;
              }
            }
            & .img-container {
              display: flex;
              flex-direction: row;
              & img {
                width: 5vw;
              }
            }
            & button {
              background: #f3826f;
              color: #fff;
              border: 1px solid #f3826f;
              font-size: 16px;
              width: 100%;
              &:hover {
                cursor: pointer;
                background: darken(#f3826f, 5%);
                border: 1px solid darken(#f3826f, 5%);
              }
            }
          }
        }
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
      .cart-link {
        position: relative;
        display: flex;
        flex-direction: column;
        & .cart {
          position: absolute;
          min-width: 10rem;
          top: 100%;
          left: -100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          background: #fff;
          & .cart-item {
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid #eee;
            padding: 0.5rem 0;
            & .cart-row {
              display: flex;
              flex-direction: row;
              & .detail-container {
                & p {
                  font-size: 16px;
                }
              }
              & .img-container {
                display: flex;
                flex-direction: row;
                & img {
                  width: 5vw;
                }
              }
              & button {
                background: #f3826f;
                color: #fff;
                border: 1px solid #f3826f;
                font-size: 16px;
                width: 100%;
                &:hover {
                  cursor: pointer;
                  background: darken(#f3826f, 5%);
                  border: 1px solid darken(#f3826f, 5%);
                }
              }
            }
          }
        }
      }
    }
  }
</style>

{#if $isMobile}
  <MobileNav />
{:else}
  <!-- else content here -->
  <nav class={navShowState ? 'white-nav' : 'transparent-nav'}>
    <div class="left-nav">
      <a>{logo}</a>
    </div>
    <div class="right-nav">
      {#each navLinks as link}
        <a>{link}</a>
      {/each}
      <a
        on:mouseenter={handleShowCart}
        on:mouseleave={handleRemoveCart}
        class="cart-link">
        Cart({cartAmount})
        {#if show}
          <div class="cart">
            {#each cart as item}
              <div class="cart-item">
                <div class="cart-row">
                  <div class="img-container">
                    <img src={item.img} alt={item.type} />
                  </div>
                  <div class="detail-container">
                    <p>{item.type}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
                <div class="cart-row">
                  <button on:click={e => handleRemoveFromCart(e, item)}>
                    Remove
                  </button>
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </a>
    </div>
  </nav>
{/if}
