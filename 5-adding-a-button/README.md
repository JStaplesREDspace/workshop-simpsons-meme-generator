# Adding a Button

So we have the text. We have the image. But still no generating. It's time to add a button. Let's do the following:

- Open up `Main.svelte` and add a button section (or element) underneath our meme.

```html
<button>Get New Meme</button>
```

- Now let's add some functionality to this button. Using Svelte, we can do the following to add a mouse click handler. Change the button to this:

```html
<button on:click="{getMeme}">Get New Meme</button>
```

This will use the `getMeme` method in the script section to handle whenever the button is clicked.

- Save your file and refresh the view on the right. Now, open up the console by clicking "Console" at the bottom.

- You should see the text "Give me a meme!" whenever you click it!

> Don't forget to save (CTRL+S, CMD+S, or File>Save) and refresh the view using the refresh icon on the right!
