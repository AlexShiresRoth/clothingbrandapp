<script>
  // your script goes here
  const logo = "F.A.W";
  const links = ["Contact", "Return Policy", "About", "Careers"];
</script>

<style lang="scss">
  /* your styles go here */
  footer {
    border-top: 2px solid #eee;
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 5vh 5vw;
    & .footer-left {
      & a {
        text-decoration: none;
        color: #f3826f;
        font-family: "Lobster", serif;
        font-size: 2vw;
      }
    }
    & .footer-right {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      & a {
        color: #999;
        font-size: 1vw;
        margin: 0 2vw;
        &:hover {
          cursor: pointer;
        }
      }
      & .social {
        & a {
          color: #f3826f;
          font-size: 1.5vw;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    footer {
      border-top: 2px solid #eee;
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin: 5vh 5vw 0;
      & .footer-left {
        & a {
          text-decoration: none;
          color: #f3826f;
          font-family: "Lobster", serif;
          font-size: 5vw;
        }
      }
      & .footer-right {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        margin: 1rem 0;
        & a {
          color: #999;
          font-size: 3vw;
          margin: 0 2vw;
          &:hover {
            cursor: pointer;
          }
        }
        & .social {
          margin: 1rem 0;
          & a {
            color: #f3826f;
            font-size: 5vw;
          }
        }
      }
    }
  }
</style>

<footer>
  <div class="footer-left">
    <a>{logo}</a>
  </div>
  <div class="footer-right">
    {#each links as item}
      <a>{item}</a>
    {/each}
    <div class="social">
      <a>
        <i class="lab la-facebook" />
      </a>
      <a>
        <i class="lab la-twitter" />
      </a>
      <a>
        <i class="lab la-instagram" />
      </a>
    </div>
  </div>
</footer>
