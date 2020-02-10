<script>
  import { showCartMobile, cartStore } from "./stores";

  const closeModal = e => showCartMobile.update(state => (state = false));

  const handleRemoveFromCart = (e, item) => {
    cartStore.update(currentCart =>
      currentCart.filter(cartItem => cartItem.id !== item.id)
    );
    if ($cartStore.length <= 0) closeModal();
  };
</script>

<style lang="scss">
  /* your styles go here */
  .cart-modal {
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;

    & .list {
      display: flex;
      flex-direction: column;
      background: #fff;
      width: 70%;
      z-index: 999999;
      overflow-y: scroll;
      max-height: 70%;
      animation: 0.3s scaleIn linear forwards;
      visibility: visible;
      transform: scale(1);
      & button:nth-child(1) {
        background: #f3826f;
        border: 1px solid #f3826f;
        border-bottom: 1px solid #f3826f;
        color: #fff;
        padding: 0.5rem;
      }
      & button {
        border: 2px solid #f3826f;
        background: #f3826f;
        padding: 0.5rem;
        color: #fff;
      }
      & .item {
        display: flex;
        flex-direction: row;
        margin-top: 5vh;

        & .cart-img {
          & img {
            max-width: 25vw;
          }
        }
        & .cart-desc-and-price {
          width: 100%;
          & h4 {
            color: #f3826f;
            font-size: 4vw;
          }
          & p {
            font-size: 3.3vw;
          }
          & div {
            box-shadow: 0 1px 1px #eee;
            text-align: center;
            margin: 1vh 0;
          }
        }
      }
    }
    & .hidden {
      visibility: hidden;
      transform: scale(0);
    }
  }
  @keyframes scaleIn {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(0.5);
    }
    90% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>

<div class="cart-modal">
  <div class={$showCartMobile ? 'list' : 'hidden'}>
    <button on:click={closeModal}>Close X</button>
    {#each $cartStore as item}
      <div class="item">
        <div class="cart-img">
          <img src={item.img} alt={item.desc} />
        </div>
        <div class="cart-desc-and-price">
          <div>
            <h4>{item.type}</h4>
          </div>
          <div>
            <p>{item.desc}</p>
          </div>
          <div>
            <p>${item.price}</p>
          </div>
        </div>
      </div>
      <button on:click={e => handleRemoveFromCart(e, item)}>Remove</button>
    {/each}
  </div>
</div>
