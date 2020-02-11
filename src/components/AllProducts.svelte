<script>
  // your script goes here
  import { cartStore } from "./stores";
  import { clothes } from "./clothes";
  import { cartAnimation } from "./reusable.js";
  let reduced = true;
  let clothingArr = clothes.slice(3, 6);

  const addToCart = (e, item) => {
    cartStore.update(cart => [item, ...cart]);
    cartAnimation();
  };
  const expandProducts = () => {
    reduced = !reduced;
    return reduced
      ? (clothingArr = clothes.slice(3, 6))
      : (clothingArr = clothes.slice(3, clothes.length));
  };
</script>

<style lang="scss">
  .all-products {
    display: flex;
    flex-direction: column;
    margin: 5vh 5vw;
    & .button-container {
      margin: 2vh 0;
      & button {
        background: transparent;
        border: 2px solid #f3826f;
        color: #f3826f;
        width: 10vw;
        height: 5vh;
        transition: all 0.3s ease-in-out;
        &:hover {
          cursor: pointer;
          background: #f3826f;
          border-radius: 200px;
          color: #fff;
        }
      }
    }
    & .clothing-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      gap: 1rem;

      & .clothing-item {
        position: relative;
        box-shadow: 0 5px 5px darken(#eee, 10%);
        max-width: 100%;
        overflow: hidden;
        animation: fadeIn 1s linear forwards;
        & img {
          width: 100%;
          transition: all 0.3s ease-in-out;
          &:hover {
            cursor: pointer;
            transform: scale(1.05);
          }
        }
        & .item-container {
          position: absolute;
          bottom: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: #fff;
          padding: 1rem;
          & h2 {
            &::after {
              content: "";
              width: 5vw;
              height: 5px;
              display: block;
              background: #f3826f;
            }
          }
        }
        & .add-cart-container {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          & button {
            height: 6vh;
            width: 6vw;
            border-bottom-left-radius: 40px;
            background: #f3826f;
            border: 2px solid #f3826f;
            color: #fff;
            transition: all 0.3s ease-in-out;
            &:hover {
              cursor: pointer;
              background: darken(#f3826f, 5%);
              border: 2px solid darken(#f3826f, 5%);
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .all-products {
      display: flex;
      flex-direction: column;
      margin: 5vh 5vw;
      & .button-container {
        margin: 2vh 0;
        & button {
          background: transparent;
          border: 2px solid #f3826f;
          color: #f3826f;
          width: 30vw;
          height: 5vh;
          transition: all 0.3s ease-in-out;
          &:hover {
            cursor: pointer;
            background: #f3826f;
            border-radius: 200px;
            color: #fff;
          }
        }
      }
      & .clothing-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 1rem;

        & .clothing-item {
          position: relative;
          box-shadow: 0 5px 5px darken(#eee, 10%);
          max-width: 100%;
          overflow: hidden;
          & img {
            width: 100%;
            transition: all 0.3s ease-in-out;
            &:hover {
              cursor: pointer;
              transform: scale(1.05);
            }
          }
          & .item-container {
            position: absolute;
            bottom: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #fff;
            padding: 0rem;
            & h2 {
              &::after {
                content: "";
                width: 100%;
                height: 5px;
                display: block;
                background: #f3826f;
              }
            }
          }
          & .add-cart-container {
            & button {
              height: 5vh;
              width: 30vw;
              background: #f3826f;
              border: 2px solid #f3826f;
              color: #fff;
              &:hover {
                cursor: pointer;
                background: darken(#f3826f, 5%);
                border: 2px solid darken(#f3826f, 5%);
              }
            }
          }
        }
      }
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    90% {
      opacity: 0.7;
      transform: scale(1.05);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>

<section class="all-products">
  <div class="button-container">
    <button on:click={expandProducts}>
      {reduced ? 'View All' : 'Show Less'}
    </button>
  </div>
  <div class="clothing-container">
    {#each clothingArr as item}
      <div class="clothing-item">
        <img src={item.img} alt={item.type} />
        <div class="add-cart-container">
          {#if $cartStore.filter(val => val.id === item.id).length > 0}
            <button on:click={e => addToCart(e, item)}>In Cart</button>
          {:else}
            <button on:click={e => addToCart(e, item)}>Add to Cart</button>
          {/if}
        </div>
        <div class="item-container">
          <h2>{item.type}</h2>
          <p>{item.desc}</p>
          <p>${item.price}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
