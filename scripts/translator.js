// Translator: English to Morse / Morse to English
import { alphabet, morse } from "./data.js";

export class Translator {
  constructor(alphabet, morse) {
    this.alphabet = alphabet;
    this.morse = morse;
  }

  translatorToMorse(inputMessage) {
    if (typeof inputMessage === "string" && inputMessage.length > 0) {
      const inputMessageLowerCase = inputMessage.toLowerCase();

      const inputMessageArray = inputMessageLowerCase.split("");
      const inputMessageTranslate = inputMessageArray.map(
        (character) => alphabet[character]
      );
      const inputMessageConcatenated = inputMessageTranslate.join(" ");
      return inputMessageConcatenated;
    } else {
      return "Not a valid input";
    }
  }

  translatorToEnglish(inputMessage) {
    if (typeof inputMessage === "string" && inputMessage.length > 0) {
      const inputMessageMorse = inputMessage;
      const inputMessageMorseArray = inputMessageMorse.split(" ");
      const inputMessageMorseTranslate = inputMessageMorseArray.map(
        (character) => morse[character]
      );
      const inputMessageMorseConcatenated = inputMessageMorseTranslate.join("");
      return inputMessageMorseConcatenated;
    } else {
      return "Not a valid input";
    }
  }
}
