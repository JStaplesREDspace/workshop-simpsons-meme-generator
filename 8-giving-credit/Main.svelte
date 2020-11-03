<script>
  import Meme from "./components/Meme.svelte";
  import { getImage, getPhrase } from "../helpers.js";

  export let image = "";
  export let phrase = "";

  const getMeme = async () => {
    image = await getImage();
    phrase = await getPhrase();
    console.log("My image", image, ", my phrase", phrase);
  };
</script>

<Meme image={image} phrase={phrase} />
<button on:click="{getMeme}">Get New Meme</button>