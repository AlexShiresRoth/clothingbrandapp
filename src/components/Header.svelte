<script>
  export const headerTitle = "Fancy. Active. Wear.";
</script>

<style lang="scss">
  header {
    background: url("https://res.cloudinary.com/snackmanproductions/image/upload/c_scale,q_52,w_2070/v1579740781/samples/napat-seang-ZackGNxY2Bw-unsplash_fpneo7.jpg");
    background-size: cover;
    background-position: 0% 60%;
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
    font-weight: 100;
    color: #f3f3f3;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & button {
      max-width: 15vw;
      font-size: 1.5vw;
      background: transparent;
      border: 2px solid #f3f3f3;
      color: #f3f3f3;
      transition: all 0.3s ease-in-out;
      &:hover {
        cursor: pointer;
        background: #f3826f;
        border: 2px solid #f3826f;
      }
    }
  }
</style>

<header>

  <div class="container">
    <h1>{headerTitle}</h1>
    <button>Become a member</button>
  </div>
</header>
