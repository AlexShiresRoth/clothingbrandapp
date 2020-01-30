<script>
  import Nav from "./components/Nav.svelte";
  import Header from "./components/Header.svelte";
  import TopPicks from "./components/TopPicks.svelte";
  import AllProducts from "./components/AllProducts.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  main {
    text-align: center;
    padding: 0;
    max-width: 240px;
    margin: 0 auto;
    width: 1446px;
  }

  @media screen and (max-width: 800px) {
    .container {
      align-items: flex-start;
    }
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
