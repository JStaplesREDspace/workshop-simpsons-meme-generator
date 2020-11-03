# Adding an Image

So we have a phrase now that says "Hello World", but this isn't a meme! Let's add an image to our meme generator. There is a new component in the folder `components/atoms/` called `Image.svelte`. Open this up and let's do the following:

- Add the following variables inside of our script section to hold data for our image source (src) and alternate text tag (alt).

```js
export let src = "the-simpsons.webp";
export let alt = "meme image";
```

- Include a string template in our img section to inject our variables into our image! Replace the values that are there already.

```js
<img src={src} alt={alt} />
```

- Add image component to the Meme component, similar to how we added the Meme component to the Main file. In `Meme.svelte` add the following to the scripts section:

```js
import Image from "./atoms/Image.svelte";
```

- Add the following to the meme div section:

```js
<Image />
```

> Don't forget to save (CTRL+S, CMD+S, or File>Save) and refresh the view using the refresh icon on the right!
