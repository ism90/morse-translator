import { Translator } from "./translator.js";
import { alphabet, morse } from "./data.js";

const translator = new Translator(alphabet, morse);

const input = document.querySelector(".input__box");
const output = document.querySelector(".output__area");
const button = document.querySelector(".button");
const clear = document.querySelector(".clear");
const sound = document.querySelector(".sound");

const determineTranslation = () => {
  let getTranslateType = input.value;
  //RegEx search pattern for Morse input
  if (/^[.\/ -]*$/gm.test(getTranslateType)) {
    // If Morse input
    const translationToEnglish =
      translator.translatorForEnglish(getTranslateType);
    output.innerHTML = translationToEnglish;
  } else {
    const translationToMorse = translator.translatorForMorse(getTranslateType);
    output.innerHTML = translationToMorse;
  }
};

// Event Listeners for Buttons

button.addEventListener("click", () => {
  determineTranslation();
});

clear.addEventListener("click", () => {
  input.value = "";
  output.innerHTML = "";
});

// Audio

sound.addEventListener("click", () => {
  let morseSound = new morseSynth();
  morseSound.play(input.value);
});
