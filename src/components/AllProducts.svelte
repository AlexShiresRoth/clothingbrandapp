<script>
  // your script goes here
  import { cartStore } from "./stores";
  import { clothes } from "./clothes";

  let reducedArr = clothes.slice(3, clothes.length);
  const addToCart = (e, item) => cartStore.update(cart => [item, ...cart]);
</script>

<style lang="scss">
  /* your styles go here */
  .all-products {
    display: flex;
    flex-direction: column;
    margin: 5vh 0;
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
        & img {
          width: 100%;
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
          border-top: 5vh solid #fff;
          border-left: 5vh solid transparent;
          display: flex;
          & button {
            margin-top: -5vh;
            height: 5vh;
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
          <button on:click={e => addToCart(e, item)}>Add To Cart</button>
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
