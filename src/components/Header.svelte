<script>
  export const headerTitle = "Fancy. Active. Wear.";
</script>

<style lang="scss">
  header {
    background: url("https://res.cloudinary.com/snackmanproductions/image/upload/c_scale,q_52,w_2070/v1579740781/samples/napat-seang-ZackGNxY2Bw-unsplash_fpneo7.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: 0% 80%;
    background-repeat: no-repeat;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 700;
    color: #f3f3f3;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & button {
      width: 15vw;
      height: 7vh;
      font-size: 1.5vw;
      background: transparent;
      border: 5px solid #f3826f;
      border-top: 5px solid #f3f3f3;
      border-left: 5px solid #fff;
      color: #f3f3f3;
      transition: all 0.3s ease-in-out;
      &:hover {
        cursor: pointer;
        background: #f3826f;
        border: 5px solid transparent;
      }
    }
  }

  @media screen and (max-width: 800px) {
    header {
      width: 100%;
      height: 40vh;
      background-position: -20px -400px;
      & h1 {
        font-size: 9vw;
        font-weight: 500;
        color: #fff;
      }
    }
    .container {
      & button {
        width: 40vw;
        height: 5vh;
        font-size: 1.5vw;
        background: transparent;
        border: 5px solid #f3826f;
        border-left: 5px solid #fff;
        border-top: 5px solid #fff;
        color: #f3826f;
        transition: all 0.3s ease-in-out;
        font-size: 3vw;
        text-transform: uppercase;

        &:hover {
          cursor: pointer;
          background: #f3826f;
          border: 5px solid transparent;
          color: #fff;
        }
      }
    }
  }
</style>

<header id="header">
  <div class="container">
    <h1>{headerTitle}</h1>
    <button>Become a member</button>
  </div>
</header>
