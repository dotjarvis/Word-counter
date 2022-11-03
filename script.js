const words = document.querySelector(`.words`);
const characters = document.querySelector(`.characters`);
const twitter = document.querySelector(`.twitter`);
const facebook = document.querySelector(`.facebook`);
const google = document.querySelector(`.google`);
const textarea = document.querySelector(`.textarea`);
const cycle = document.querySelector(`.cycle`);

// 1. Typing  and Pasting logics
textarea.addEventListener(`input`, function (e) {
  let pasteCharacters = textarea.value;

  // Adding characters
  characters.textContent = pasteCharacters.length;
  words.textContent = pasteCharacters.split(` `).length;
  twitter.textContent = 250 - pasteCharacters.length;
  facebook.textContent = 300 - pasteCharacters.length;
  google.textContent = 350 - pasteCharacters.length;

  //   Deleting characters
  if (e.inputType === "deleteContentBackward") {
    words.textContent = textarea.value.split(` `).length;
    if (textarea.value === ``) words.textContent = 0;
    characters.textContent = pasteCharacters.length--;
    twitter.textContent = 250 - pasteCharacters.length++;
    facebook.textContent = 300 - pasteCharacters.length++;
    google.textContent = 350 - pasteCharacters.length++;
    return;
  }
});

// Resting value and textarea
cycle.addEventListener(`click`, function () {
  textarea.value = ``;
  characters.textContent = 0;
  words.textContent = 0;
  twitter.textContent = 250;
  facebook.textContent = 300;
  google.textContent = 350;
});
