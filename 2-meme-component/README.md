# Adding a Meme Component

We have a working app, now let's build the component!
In the `components` folder, there is a `Meme.svelte`. Open this up and let's do the following:

- Add a script section at the very top that looks like so:

```html
<script></script>
```

- Add the following inside of our script section to create a variable to hold custom text for our meme component.

```js
let phrase = "Hello World!";
```

- Include a string template to hold our script section phrase inside of our div section. It should look like this:

```html
<div>
  {@html phrase}
</div>
```

> Don't forget to save (CTRL+S, CMD+S, or File>Save) and refresh the view using the refresh icon on the right!
