<script>
  export let src = "the-simpsons.webp";
  export let alt = "meme image";
</script>

<img src={src || "the-simpsons.webp"} alt={alt} />

<style>
  img {
    width: 600px;
    height: 480px;
    object-fit: cover;
  }
</style>