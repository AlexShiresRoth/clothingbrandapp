<script>
  import Nav from "./components/Nav.svelte";
  import Header from "./components/Header.svelte";
  import TopPicks from "./components/TopPicks.svelte";
  import AllProducts from "./components/AllProducts.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style lang="scss">
  :global(body) {
    overflow-x: hidden;
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
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  main {
    text-align: center;
    padding: 0;
    margin: 0 auto;
    width: 100vw;
  }

  @media screen and (max-width: 800px) {
    main {
      max-width: none;
    }
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<div class="container">
  <Nav />
  <main>
    <Header />
    <TopPicks />
    <AllProducts />
    <Footer />
  </main>
</div>
