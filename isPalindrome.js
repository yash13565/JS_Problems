 //Check whether a string is palindrome or not.

const checkIsPalindrome = (str) => {
 str = str.toLowerCase().replace(/\W/g,'');
 const reversedStr = str.split('').reverse().join('');
return str === reversedStr
};

const res = checkIsPalindrome('A man, a plan, a canal, Panama');
console.log(res);