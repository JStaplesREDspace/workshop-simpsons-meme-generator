<script>
  import Image from "./atoms/Image.svelte";
  import Text from "./atoms/Text.svelte";
  export let image = "the-simpsons.webp";
  export let phrase = "Hello World!";
</script>

<div class="meme">
  <Image src={image} alt="The Simpsons Image" />
  <Text text={phrase} />
</div>

<style>
  .meme {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: grey;
    width: 600px;
    height: 480px;
    border: solid 1px #151e26;
  }
</style>