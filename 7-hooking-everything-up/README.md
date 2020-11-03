# Hooking Everything Up

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
