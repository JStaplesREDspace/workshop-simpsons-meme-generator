<script>
  import Meme from "./components/Meme.svelte";

  const getMeme = () => {
    console.log("Give me a meme!");
  };
</script>

<Meme />
<button on:click="{getMeme}">Get New Meme</button>