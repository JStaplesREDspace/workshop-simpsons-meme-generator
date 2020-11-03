# Adding a Text Component

Hooray! We have an image! Now we will create a component to hold the text. We will need to create this component ourselves this time. Let's do the following:

- Create a new file in `components/atoms/` and call it `Text.svelte`.

- Open this new file up and add the following:

```html
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
```

- Import this new file into our Meme component:

```js
import Text from "./atoms/Text.svelte";
```

```html
<Text />
```

- Let's inject our phrase into our new Text component! It is similar to what we did for the img -> src and alt properties! Change `<Text />` to say this instead:

```html
<Text text="{phrase}" />
```

We can do this, because we wrote `export let phrase = "Hello World";`. The `export` keyword allows us to inject values into our component from outside!

> Don't forget to save (CTRL+S, CMD+S, or File>Save) and refresh the view using the refresh icon on the right!
