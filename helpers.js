/**
 * Returns a random image from The Simpsons Faces Subreddit.
 */
export const getImage = async () => {
  return await fetch("https://meme-api.herokuapp.com/gimme/simpsonsfaces")
    .then((blob) => blob.json())
    .then((result) => result.url);
};

/**
 * Returns a random quote from The Simpsons quotes API (Application Programming Interface).
 */
export const getPhrase = async () => {
  return await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then((blob) => blob.json())
    .then((result) => result[0].quote || "");
};
