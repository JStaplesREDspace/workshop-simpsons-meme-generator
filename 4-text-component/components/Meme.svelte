<script>
  import Image from "./atoms/Image.svelte";
  let phrase = "Hello World!";
</script>

<div class="meme">
  <Image />
  <!-- Add Text Component below! -->
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