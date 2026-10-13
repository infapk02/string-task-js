// Task One
// Count how many times a string has the letter a

let banana = "banana";
let count = 0;

for (letter in banana) {
  if (banana[letter] === "a") {
    count++;
  }
}
console.log(count);

// Task Two
// Count how many times a string has the letter a or A
let banana2 = "bAnanA";
let count2 = 0;

for (letter in banana2) {
  console.log(banana2[letter]);
  if (banana2[letter] === "a" || banana2[letter] === "A") {
    count2++;
  }
}
console.log(count2);

// Task Three
// Check whether a string contains all the vowels a, e, i, o, u

let magicalWord = "I Love You Rani";

if (
  magicalWord.includes("a") &&
  magicalWord.includes("e") &&
  magicalWord.includes("i") &&
  magicalWord.includes("o") &&
  magicalWord.includes("u")
) {
  console.log("The string contains all the vowels");
}

// Task Four
// If a given string has either x, replace x by y. if the given string has X, replace it by Y

let str1 = "Xerox xylophone X-ray";

let result = str1.replaceAll("x", "y").replaceAll("X", "Y");
console.log(result);

// Task Five
// Capitalize Every first Letter of each word in a String

let str2 = "i am learning javascript";
let splitText = str2.split(" ");

for (word in splitText) {
  splitText[word] = splitText[word].charAt(0).toUpperCase() + splitText[word].slice(1);
}

console.log(splitText.join(" "));
