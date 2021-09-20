// English to Morse Object

export const alphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ä: ".-.-",
  á: ".--.-",
  å: ".--.-",
  ą: "·−·−",
  æ: "·−·−",
  ć: "−·−··",
  ĉ: "−·−··",
  ç: "−·−··",
  Ch: "----",
  đ: "··−··",
  ð: "··−−·",
  é: "..-..",
  è: "..-..",
  ę: "..-..",
  ĝ: "−−·−·",
  ĥ: "----",
  ĵ: "·−−−·",
  ł: "·−··−",
  ń: "--.--",
  ñ: "--.--",
  ó: "---.",
  ö: "---.",
  ø: "---.",
  ś: "···−···",
  ŝ: "−−−−",
  š: "−−−−",
  þ: "·−−··",
  ü: "..--",
  ŭ: "··−−",
  ź: "−−··−·",
  ż: "−−··−",
  "&": ".-...",
  "'": ".----.",
  "@": ".--.-.",
  ")": "-.--.-",
  "(": "-.--.",
  ":": "---...",
  ",": "--..--",
  "=": "-...-",
  "!": "-.-.--",
  ".": ".-.-.-",
  "-": "-....-",
  "*": "-..-",
  "%": "----- -..-. -----",
  "+": ".-.-.",
  '"': ".-..-.",
  "?": "..--..",
  " ": "/",
};

// Morse to English Object

export const morse = Object.fromEntries(
  Object.entries(alphabet).map(([key, val]) => [val, key])
);
