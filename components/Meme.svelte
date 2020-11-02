<script>
  import Image from "./atoms/Image.svelte";
  import Text from "./atoms/Text.svelte";

  export let src = "";
  export let alt = "meme image";
  export let text = "";
</script>

<div class="meme">
  <Image src={src} alt={alt} />
  <Text text={text} />

  <slot />
</div>

<style>
  .meme {
    position: relative;
    background: grey;
    width: 600px;
    height: 480px;
    border: solid 1px #151e26;
  }
</style>