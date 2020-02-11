<script>
  // your script goes here
  import { cartStore } from "./stores.js";
  import { clothes } from "./clothes.js";
  import { cartAnimation } from "./reusable.js";

  let topPicks = clothes.slice(0, 3);

  const addToCart = (e, item) => {
    cartStore.update(cart => [item, ...cart]);
    cartAnimation();
  };
</script>

<style lang="scss">
  /* your styles go here */
  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 5vh 5vw;
    & h2 {
      margin: 0;
    }
  }
  .picks-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .pick-container {
    display: flex;
    justify-content: flex-start;
    background: #eee;
    box-shadow: 0 3px 3px darken(#eee, 5%);
    & img {
      width: 15vw;
    }
    & .right-col {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
      gap: 0.5vh;
      width: 100%;
      & .col {
        background: #fff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        & .add {
          background: transparent;
          border: 2px solid #f3826f;
          color: #f3826f;
          height: 5vh;
          width: 7vw;
          transition: all 0.3s ease-in-out;
          &:hover {
            cursor: pointer;
            color: #f3f3f3;
            background: #f3826f;
          }
        }
        & .added {
          background: #f3826f;
          border: 2px solid #f3826f;
          color: #fff;
          height: 5vh;
          width: 7vw;
          transition: all 0.3s ease-in-out;
          &:hover {
            cursor: pointer;
            color: #f3f3f3;
            background: darken(#f3826f, 5%);
            border: 2px solid darken(#f3826f, 5%);
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .picks-grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      gap: 1rem;
    }
    .pick-container {
      display: flex;
      justify-content: flex-start;
      background: #eee;
      box-shadow: 0 3px 3px darken(#eee, 5%);
      & img {
        width: 40vw;
      }
      & .right-col {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, auto);
        gap: 0.5vh;
        & .col {
          background: #fff;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          & p {
            font-size: 3vw;
          }
          & h2 {
            font-size: 5vw;
          }
          & .add,
          & .added {
            height: 4vh;
            width: 25vw;
            transition: all 0.3s ease-in-out;
            font-size: 3vw;
            margin-left: 2vw;
          }
        }
      }
    }
  }
</style>

<section class="section">
  <h2>Today's Hot Deals.</h2>
  <p>Hand picked for you, by our staff.</p>
  <div class="picks-grid">
    {#each topPicks as item}
      <div class="pick-container">
        <div class="left-col">
          <img src={item.img} alt={item.desc} />
        </div>
        <div class="right-col">
          <div class="col">
            <h2>{item.type}</h2>
          </div>
          <div class="col">
            <p>{item.desc}</p>
          </div>
          <div class="col">
            <p>${item.price}</p>
          </div>
          <div class="col">
            {#if $cartStore.filter(val => val.id === item.id).length > 0}
              <button on:click={e => addToCart(e, item)} class="added">
                In Cart
              </button>
            {:else}
              <button on:click={e => addToCart(e, item)} class="add">
                Add to Cart
              </button>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
