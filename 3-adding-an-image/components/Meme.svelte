<script>
  let phrase = "Hello World!";
</script>

<div class="meme">
	{@html phrase}
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