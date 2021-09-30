# Review

## Goals

1. Working morse code translator - done
   - english to morse - done
   - morse to english - done
2. Practice using TDD - done
   - Little typo in your tests, you must have renamed the method after your tests. Orginally they all failed but when I corrected it they all passed.
   - translatorForEnglish needs to be translatorToEnglish similar story with morse
3. Application of what you're learning (pure functions etc.) - Clean functions, and the app works - done
   ​

## Specification

​

- Translator functions and Unit tests to be written in separate files. Functions to be brought into the main.js and unit test files - done
  - Has written tests and pure functions in separate files that have been brought into the main which is great.
- Readme - done
  - Great readme!
  - Add a section about set up so if someone came to project they know how to get it and run the tests.
  ```bash
  # get project
  git clone project-url
  # go into project
  cd project-name
  # add dependencies
  npm install
  # run test scripts
  npm run test
  ```
- 10 commits during development
  - \>10 commits done. Judging by commit comments, they are of value.
- Mobile first/Responsive - done
  - Responsive and looks nice! Handles a large sentence translation
- No tutorials - done
  - This work looks original
    ​

## Overall

​
​A very nice morse code translator which works well, in terms of JS you have separated your files which is great. Turning it into a class was brave and how i would have approached it. You must have had to research how to test a class so kudo's to you mate. You tests are solid as well, its awesome!

Nice object swapping in the data file. Who needs two hard coded objects?
​
You have complete the extension which is great!

## To work on

### Event listener refactor

If you have one named function without any params you can just pass it be reference to your eventListener.

```js
// main.js
button.addEventListener("click", () => {
  determineTranslation();
});
```

could be.

```js
button.addEventListener("click", determineTranslation);
```

### Tidy up your tests?

This is super knit picky but I can't see anything else to work on.

- "Testing translator ()" should be "Testing Translator.nameOfMethod"
- I think you might want to put them into two describe blocks
  - One block tests translatorToMorse()
  - The other tests translatorToEnglish()
- You can initialize your class once, you don't have to do it for every test.

```js
// translator.test.js
describe("Testing translator ()", () => {
  // accessible by all tests in describe block
  const translator = new Translator(alphabet, morse);

  it("Should translate a to .-", () => {
    const result = translator.translatorToMorse("a");
    expect(result).toBe(".-");
  });

  it("Should translate F to ..-.", () => {
    const result = translator.translatorToMorse("f");
    expect(result).toBe("..-.");
  });
});
```
