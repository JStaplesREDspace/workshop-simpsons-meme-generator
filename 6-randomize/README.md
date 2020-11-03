# Randomization

We have the button and a place for the memes. We're ready. It's time. Let's do the following:

- I've created a file called `helpers.js` in the root folder (look at bottom of files for it). Open it up and take a look!

- You should see two functions. One called `getImage` and one called `getPhrase`. That sounds like functions we can use to make a meme!

- Open up `Main.svelte` and include our two new functions:

```js
import { getImage, getPhrase } from "../helpers.js";
```

-- Instead of writing "Give me a meme!" when we click the Get New Meme button, let's switch our `getMeme` section to look like this:

```js
const getMeme = async () => {
  image = await getImage();
  phrase = await getPhrase();
};
```

- Here, we are using `getImage` and `getPhrase` to populate the data for two variables, `image` and `phrase`.

- But wait! Those variables don't exist yet! Well, let's make them! In the scripts section, underneath the `import` lines, let's create our variables:

```js
export let image = "";
export let phrase = "";
```

- And finally, let's console log out our values so we can see what this data will look like by adding this to `getMeme`:

```js
console.log("My image", image, ", my phrase", phrase);
```

> Don't forget to save (CTRL+S, CMD+S, or File>Save) and refresh the view using the refresh icon on the right!
