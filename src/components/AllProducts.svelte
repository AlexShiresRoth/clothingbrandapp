<script>
  // your script goes here
  import { cartStore } from "./stores";
  import { clothes } from "./clothes";

  let reducedArr = clothes.slice(3, clothes.length);
  const cartAnimation = () => {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    div.classList.add("add-cart-bubble");
    div.innerHTML = '<i class="las la-cart-plus"></i>';
    body.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 4000);
    console.log(body);
  };

  const addToCart = (e, item) => {
    cartStore.update(cart => [item, ...cart]);
    cartAnimation();
  };
</script>

<style lang="scss">
  :global(body) {
    .add-cart-bubble {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2.5rem;
      width: 2.5rem;
      position: fixed;
      color: #fff;
      top: 45%;
      left: 50%;
      background: darken(#f3826f, 5%);
      box-shadow: 0 10px 10px darken(#f3826f, 20%);
      border-radius: 50%;
      transform: translate(0, 0);
      animation: cartAnim 2s linear forwards;
      z-index: 99999999;
      & i {
        font-size: 1.5rem;
      }
    }
    @keyframes cartAnim {
      0% {
        transform: translate(0, -10vh);
        box-shadow: 0 10px 10px darken(#f3826f, 20%);
      }
      20% {
        transform: translate(10vw, 20vh);
        box-shadow: 0 10px 10px darken(#f3826f, 20%);
      }
      40% {
        transform: translate(25vw, -20vh) scale(5);
        box-shadow: 0 40px 40px darken(#f3826f, 40%);
      }
      70% {
        transform: translate(50vw, -50vh) scale(0);
        box-shadow: 0 10px 10px darken(#f3826f, 20%);
      }
      100% {
        transform: translate(85vw, -100vh) scale(0);
        box-shadow: 0 10px 10px darken(#f3826f, 20%);
      }
    }
  }

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
              width: 20vw;
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
</style>

<section class="all-products">
  <div class="button-container">
    <button>View All</button>
  </div>
  <div class="clothing-container">
    {#each reducedArr as item}
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
