<script>
  // your script goes here
  import { cartStore } from "./stores.js";

  let picks = [
    {
      type: "Joggers",
      price: "399.99",
      desc: "Some fancy joggers for you to jog in",
      img:
        "https://res.cloudinary.com/snackmanproductions/image/upload/c_scale,q_50,w_919/v1579913745/svelte/napat-seang-Iing2lv2WBw-unsplash_eeyzek.jpg"
    },
    {
      type: "Sweatshirt",
      price: "699.99",
      desc:
        "A real fancy sweatshirt that, actually puts the sweat back in your body",
      img:
        "https://res.cloudinary.com/snackmanproductions/image/upload/c_scale,q_53,w_919/v1579913186/svelte/i-am_nah-u31HtseeCq4-unsplash_qplpfp.jpg"
    },
    {
      type: "T-shirt",
      price: "1399.99",
      desc: "Kanye blessed this shirt",
      img:
        "https://res.cloudinary.com/snackmanproductions/image/upload/c_scale,q_50,w_1003/v1579918545/svelte/sobhan-joodi-iun3EnrZKxI-unsplash_iqji6n.jpg"
    }
  ];

  const addToCart = (e, item) => {
    cartStore.update(cart => {
      return [item, ...cart];
    });
  };
</script>

<style lang="scss">
  /* your styles go here */
  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 2vh 0;
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
        & button {
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
      }
    }
  }
</style>

<section class="section">
  <h2>Today's Hot Deals.</h2>
  <div class="picks-grid">
    {#each picks as item}
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
            <button on:click={e => addToCart(e, item)}>Add To Cart</button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
