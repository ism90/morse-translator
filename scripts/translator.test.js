import { Translator } from "./translator";
import { alphabet, morse } from "./data";

// Valid Tests
describe("Testing translator ()", () => {
  it("Should translate a to .-", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translatorForMorse("a");
    expect(result).toBe(".-");
  });

  it("Should translate --.. to z", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translatorForEnglish("--..");
    expect(result).toBe("z");
  });

  // Accept Upper Case
  it("Should translate F to ..-.", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translatorForMorse("f");
    expect(result).toBe("..-.");
  });

  it("Should translate 1 to .----", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translatorForMorse("1");
    expect(result).toBe(".----");
  });

  it("Should translate ----. to 9", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translatorForEnglish("----.");
    expect(result).toBe("9");
  });

  // Special characters

  it("Should translate & to .-...", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translatorForMorse("&");
    expect(result).toBe(".-...");
  });

  it("Should translate ä to .-.-", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translatorForMorse("ä");
    expect(result).toBe(".-.-");
  });

  // Account for space break in Morse
  it("Should translate a b to .- / -...", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translatorForMorse("a b");
    expect(result).toBe(".- / -...");
  });

  it("Should translate Ian Mason to .. .- -. / -- .- ... --- -.", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translatorForMorse("Ian Mason");
    expect(result).toBe(".. .- -. / -- .- ... --- -.");
  });

  it("Should translate .. .- -. / -- .- ... --- -. to ian mason", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translatorForEnglish(".. .- -. / -- .- ... --- -.");
    expect(result).toBe("ian mason");
  });

  // Invalid Tests

  it("Should not translate an empty string", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translatorForMorse("");
    expect(result).toBe("Not a valid input");
  });

  // Invalid/Empty Inputs
  it("Should not translate invalid inputs", () => {
    const translator = new Translator(alphabet, morse);
    const result = translator.translatorForMorse(null);
    expect(result).toBe("Not a valid input");
  });
});
