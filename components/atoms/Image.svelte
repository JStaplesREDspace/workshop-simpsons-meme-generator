<script>
  export let src = "";
  export let alt = "";
</script>

<img src={src || 'https://television-b26f.kxcdn.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-05-at-3.58.54-PM-770x470.png'} {alt} />

<style>
  img {
    width: 600px;
    height: 480px;
    object-fit: cover;
  }
</style>