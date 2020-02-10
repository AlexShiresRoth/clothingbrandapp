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
        margin-top: 2vh;

        & .cart-img {
          & img {
            max-width: 25vw;
          }
        }
        & .cart-desc-and-price {
          width: 100%;
          & h4 {
            color: #f3826f;
          }
          & p {
            font-size: 3vw;
          }
          & div {
            box-shadow: 0 1px 1px #eee;
            text-align: center;
          }
        }
      }
    }
  }
</style>

<div class="cart-modal">
  <div class="list">
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
