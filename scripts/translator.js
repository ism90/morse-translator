import { alphabet, morse } from "./data";

export class Translator {
  constructor(alphabet, morse) {
    this.alphabet = alphabet;
    this.morse = morse;
    // this.inputMessage = "";
    // this.translatedMessage = "";
  }

  translatorForMorse(inputMessage) {
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

  translatorForEnglish(inputMessage) {
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
