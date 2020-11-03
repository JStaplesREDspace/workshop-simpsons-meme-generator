# Giving Credit

We did it! We made a meme generator! I hope you had fun! We have one new component we can add to our app to make it cooler! Let's do the following:

- Look in the `components/` folder and see `Credits.svelte`. You can open it up and look at it if you want.

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
</Credits
```

And we're done! I hope you had fun!
You can keep a working copy of your code here by saving this Sandbox via [codesandbox.io](https://codesandbox.io). You'll need to make an account.

Thanks for taking part in this workshop! You can always go straight to `9-complete/` if you just want to see the finished app.

> Don't forget to save (CTRL+S, CMD+S, or File>Save) and refresh the view using the refresh icon on the right!
