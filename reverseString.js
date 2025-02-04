const name = 'My name is Yashwardhan';

let reversedStr = '';
let currentWord = '';

for (let i = 0; i < name.length; i++) {
  if (name[i] !== ' ') {
    currentWord = name[i] + currentWord; // Reverse the current word
  } else {
    reversedStr += currentWord + ' '; // Add the reversed word to the result
    currentWord = ''; // Reset the current word
  }
}

// Add the last word (since there's no space after it)
reversedStr += currentWord;

console.log(reversedStr);
