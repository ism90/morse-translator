import { translator } from "./translator";
import { data } from "./data";

// Valid Tests
describe("Testing translator ()", () => {

  it("Should translate a to .-", () => {
    const result = translator("a");
    expect(result).toBe(".-");
  });

  it("Should translate --.. to z", () => {
    const result = translator("--..");
    expect(result).toBe("Z");
  });

  // Accept Upper Case
  it("Should translate F to ..-.", () => {
    const result = translator("F");
    expect(result).toBe("..-.");
  });

  it("Should translate 1 to .----", () => {
    const result = translator("1");
    expect(result).toBe(".----");
  });

  it("Should translate ----. to 9", () => {
    const result = translator("----.");
    expect(result).toBe("9");
  });

  // Special characters

  it("Should translate & to .-...", () => {
    const result = translator("&");
    expect(result).toBe(".-...");
  });

  it("Should translate .-.- to ä", () => {
    const result = translator(".-.-");
    expect(result).toBe("ä");
  });

  // Account for space break in Morse
  it("Should translate a b to .- / -...", () => {
    const result = translator("a b");
    expect(result).toBe(".- / -...");
  });

  it("Should translate Ian Mason to .. .- -. / -- .- ... --- -.", () => {
    const result = translator("Ian Mason");
    expect(result).toBe(".. .- -. / -- .- ... --- -.");
  });

  it("Should translate .. .- -. / -- .- ... --- -. to ian mason", () => {
    const result = translator(".. .- -. / -- .- ... --- -.");
    expect(result).toBe("ian mason");
  });

  // Invalid Tests

  it("Should not translate an empty string", () => {
    const result = translator("");
    expect(result).toBe("Not a valid input");
  });

  // Invalid/Empty Inputs
  it("Should not translate invalid inputs", () => {
    const result = translator(null);
    expect(result).toBe("Not a valid input");
  });
});
