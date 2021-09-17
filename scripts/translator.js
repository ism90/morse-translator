import { alphabet } from "./data";

export const translator = (input) => {
  if (typeof input === "string" && input.length > 0) {
    let userInput = input.toLowerCase();

    const userInputArray = userInput.split("");
    const userInputTranslate = userInputArray.map((input) => alphabet[input]);
    const userInputString = userInputTranslate.join(" ");

    return userInputString;
  } else {
    return "Not a valid input";
  }
};

