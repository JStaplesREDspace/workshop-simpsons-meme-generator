# Welcome to The Simpsons Meme Generator - Workshop!

Today, we are going to build out a meme generator via the Svelte framework. Make sure to save often (CTRL+S, CMD+S or File>Save).

## Table of Contents

1 - You are here!
[2 - Adding a Meme Component](###adding-a-meme-component)
[3 - Adding an Image](###adding-an-image)
[4 - Adding a Text Component](###adding-a-text-component)
[5 - Adding a Button](###adding-a-button)
[6 - Randomization](###randomization)
[7 - Hooking Everything Up](###hooking-everything-up)
[8 - Giving Credit](###giving-credit)

## Instructions

### Adding a Meme Component

We have a working app, now let's build the component!
In the `briefcase/` folder, folder, there is a `Meme.svelte`. Drag and drop this component into the `components/` folder. Then click on `Meme.svelte` to open it up and let's do the following:

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

- Now, change our `Main.svelte` file to this to bring in our Meme component:

```html
<script>
  import Meme from "./components/Meme.svelte";
</script>

<Meme />
```

> Don't forget to save (CTRL+S, CMD+S, or File>Save) and refresh the view using the refresh icon on the right!

### Adding an Image

So we have a phrase now that says "Hello World", but this isn't a meme! Let's add an image to our meme generator. There is a component in the folder `briefcase` called `Image.svelte`. Add it to the `components/atoms/` folder. Then, open it up and let's do the following:

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

### Adding a Text Component

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

```js
<Text text={phrase} />
```

We can do this, because we wrote `export let phrase = "Hello World";`. The `export` keyword allows us to inject values into our component from outside!

- Now, let's remove our div section, as we don't need it anymore. Remove the following:

```js
<div>
  {@html phrase}
</div>
```

> Don't forget to save (CTRL+S, CMD+S, or File>Save) and refresh the view using the refresh icon on the right!

### Adding a Button

So we have the text. We have the image. But still no generating. It's time to add a button. Let's do the following:

- Open up `Main.svelte` and add a button section (or element) underneath our meme.

```html
<button>Get New Meme</button>
```

- Now let's add some functionality to this button. Using Svelte, we can do the following to add a mouse click handler. Change the button to this:

```js
<button on:click={getMeme}>Get New Meme</button>
```

- And add this function to the script section:

```js
const getMeme = () => {
  console.log("Give me a meme!");
};
```

This will use the `getMeme` method in the script section to handle whenever the button is clicked.

- Save your file and refresh the view on the right. Now, open up the console by clicking "Console" at the bottom.

- You should see the text "Give me a meme!" whenever you click it!

> Don't forget to save (CTRL+S, CMD+S, or File>Save) and refresh the view using the refresh icon on the right!

### Randomization

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
let image = "";
let phrase = "";
```

- And finally, let's console log out our values so we can see what this data will look like by adding this to `getMeme`:

```js
console.log("My image", image, ", my phrase", phrase);
```

> Don't forget to save (CTRL+S, CMD+S, or File>Save) and refresh the view using the refresh icon on the right!

### Hooking Everything Up

We're so close to a meme! But there is a final step we need to do. We have a Meme component that handles and image and phrases, and we have a random image and phrase in our `Main.svelte` file. Let's make them talk to each other by doing the following:

- Open up `Meme.svelte` and add a new variable called `image`. Also, let's make our `phrase` an export so that `Main.svelte` can talk to it later (this exposes our variable to outside files using our component).

```js
export let image = "";
export let phrase = "Hello World!";
```

- And pass the new image variable through to our Image component. Luckily, we've already exposed this variable, so we just need to hook it up! We can hook up the alt tag here if we want too. (BONUS!)

```js
<Image src={image} alt="The Simpsons Image" />
```

- Open up `Main.svelte` and use the variables we created last time to pass to our Meme component. `<Meme />` should be changed to this:

```js
<Meme image={image} phrase={phrase} />
```

- Finally, cross your fingers and save!! Hit that button and see if we get random The Simpsons Memes!

> Don't forget to save (CTRL+S, CMD+S, or File>Save) and refresh the view using the refresh icon on the right!

Huh, our image is broken!
Well, that's because we are passing it an image with a source of "".
Let's do a little bit of code to fix it.

- In `Image.svelte`, in the `components/atoms/` folder, change our `img` section to look a little different:

```html
<img src={src || "the-simpsons.webp"} alt={alt} />
```

- This creates a "fallback" so that if our src is "", we will use "the-simpsons.webp" instead.

### Giving Credit

We did it! We made a meme generator! I hope you had fun! We have one new component we can add to our app to make it cooler! Let's do the following:

- Look in the `briefcase/` folder and see `Credits.svelte`. Move it to `components/`. You can open it up and look at it if you want.

- Open up `Main.svelte` and add in this new component!

```js
import Credits from "./components/Credits.svelte";
```

```html
<Credits />
```

If we run this now, we should see our new credits component. But this one includes a slot inside `Credits.svelte`. Because of this, we can add ourselves as credits too! Change the Credits section to look like this:

```html
<Credits>
  This Meme Generator was created by /put your name here/!
</Credits>
```

And we're done! I hope you had fun!
You can keep a working copy of your code here by saving this Sandbox via [codesandbox.io](https://codesandbox.io). You'll need to make an account.

Thanks for taking part in this workshop! You can always go straight to `9-complete/` if you just want to see the finished app.

> Don't forget to save (CTRL+S, CMD+S, or File>Save) and refresh the view using the refresh icon on the right!

[Back to Top](##table-of-contents)
