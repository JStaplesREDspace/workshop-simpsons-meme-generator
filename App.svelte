<script>
  import Meme from "./components/Meme.svelte";
  import Credits from "./components/Credits.svelte";
  import { getImage, getPhrase } from "../helpers";

  let image = "";
  let phrase = "";

  const getMeme = async () => {
    image = await getImage();
    phrase = await getPhrase();
    await getPhrase();
    console.log("my meme image", image);
  };
</script>

<main>
  <Meme src={image} text={phrase} alt="meme image"></Meme>
  <button on:click={getMeme}>Get New Meme</button>

  <Credits />
</main>


<style>
  :global(html),
  :global(body) {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background: #254054;
    color: white;
    font-weight: 300;
  }

  :global(a) {
    color: #72a8d4;
    text-decoration: none;
  }

  :global(button) {
    background: #151e26;
    padding: 8px 12px;
    margin: 10px;
    color: #72a8d4;
    font-size: 1.2em;
    border: solid 1px #72a8d4;
    outline: none;
    cursor: pointer;
  }
  :global(button:hover) {
    background: #184873;
  }

  main {
    background: url("./homer.png") no-repeat calc(90% + 120px) 80vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    min-height: inherit;
    font-family: sans-serif;
    text-align: center;
  }
</style>