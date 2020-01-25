<script>
  // your script goes here
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
</script>

<style lang="scss">
  /* your styles go here */
  .picks-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 5vh 0;
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
      & .col {
        background: #fff;
      }
    }
  }
</style>

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
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  {/each}
</div>
