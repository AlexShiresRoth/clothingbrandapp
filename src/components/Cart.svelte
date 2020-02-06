<script>
  import {
    cartStore,
    cartState,
    navIntersect,
    navState,
    isHovering
  } from "./stores.js";

  let cartAmount;
  const addToStore = cartStore.subscribe(val => {
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
</script>

<style lang="scss">
  /* your styles go here */
  a {
    color: #fff;
    font-family: "Muli";
    font-size: 1vw;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .cart-link {
    position: relative;
    display: flex;
    flex-direction: column;
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
  .white-bg {
    color: #666;
  }
  @media screen and (max-width: 800px) {
    .cart-link {
      text-align: center;
      width: 100%;
      color: #666;
      border-top: 1px solid #f3826f;
      border-bottom: 1px solid #f3826f;
      padding: 1rem 0;
      color: #333;
      height: 1rem;
      font-size: 16px;
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
</style>

<a
  on:mouseenter={handleShowCart}
  on:mouseleave={handleRemoveCart}
  class={$navIntersect && $isHovering ? 'cart-link white-bg' : !$navIntersect && $isHovering ? 'cart-link white-bg' : $navIntersect && !$isHovering ? 'cart-link white-bg' : 'cart-link'}>
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
