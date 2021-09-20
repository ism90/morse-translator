import { Translator } from "./translator.js";
import { alphabet, morse } from "./data.js";

const translator = new Translator(alphabet, morse);

const input = document.querySelector(".input__box");
const output = document.querySelector(".output__area");
const button = document.querySelector(".button");

const determineTranslation = () => {
  let getTranslateType = input.value;
  //RegEx search pattern for English input
  if (/^[0-9a-zA-Zä-ż\s]+$/gm.test(getTranslateType)) {
    // If English input,
    const translation = translator.translatorForMorse(getTranslateType);
    output.innerHTML = translation;
  }
};
button.addEventListener("click", () => {
  determineTranslation();
});