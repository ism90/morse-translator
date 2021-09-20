import { Translator } from "./translator.js";
import { alphabet, morse } from "./data.js";

const translator = new Translator(alphabet, morse);

const input = document.querySelector(".input__box");
const output = document.querySelector(".output__area");
const button = document.querySelector(".button");
const clear = document.querySelector(".clear");

const determineTranslation = () => {
  let getTranslateType = input.value;
  //RegEx search pattern for English input
  if  (/^[.\/ -]*$/gm.test(getTranslateType)) {
    // If English input,
    const translationToEnglish = translator.translatorForEnglish(getTranslateType);
    output.innerHTML = translationToEnglish;
  } else {
    const translationToMorse =
      translator.translatorForMorse(getTranslateType);
    output.innerHTML = translationToMorse;
  }
};
button.addEventListener("click", () => {
  determineTranslation();
});

clear.addEventListener("click", () => {
  input.value = "";
});



// |&'@)(:,=!.-*%+"?