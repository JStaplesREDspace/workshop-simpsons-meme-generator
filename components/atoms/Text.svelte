<script>
  export let text = "";
</script>

<div class="text">{@html text}</div>

<style>
  .text {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 600px;
    padding: 4px 10px;
    color: white;
    font-size: 1.5em;
    font-weight: 900;
    font-family: Impact, Charcoal, sans-serif;
    box-sizing: border-box;
    -webkit-text-stroke: 1px black;
    -webkit-text-fill-color: white;
  }
</style>