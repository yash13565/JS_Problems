//1.using sort method
const longestWordInString = (str) => {
const convertStr = str.split(' ').sort((a, b) => b.length - a.length);
return convertStr[0];
};

const res  = longestWordInString('The quick brown fox jumped over the lazy dog');
console.log(res);

//2.Reduce Method

const longestWordInString2 = (str) => {
    const convertStr = str.split(' ').reduce((acc, curr) => {
        return acc.length > curr.length ? acc : curr;
    },'');
    return convertStr;
}

const resTwo  = longestWordInString2('Hi I am a developer name Yashwardhan');
console.log(resTwo);