// Find unique distinct non repetitive integer in an array.
// output -  [2,4,5]
// const arr = [1,2,3,1,3,4,5]
// let uniqueArr = [];
// let countMap = {};

// for(let i=0; i<arr.length;i++){
//    countMap[arr[i]] = (countMap[arr[i]] || 0) + 1;
// }

// console.log(countMap);
// for(let key in countMap){
//    if(countMap[key] === 1){
//       uniqueArr.push(parseInt(key));
//    }
// }
// console.log(uniqueArr);

// find n no of distinct integer.

const arrOne = [1,2,3]
const arrTwo = [3,4,5]
const arrThree = [5,6,7]
const arrFour = [6,7,8]
let uniqueArr = [];
let countMap = {};

const findDistinctInteger = (arr) => {
for(let i=0; i<arr.length;i++){
    countMap[arr[i]] = (countMap[arr[i]] || 0) + 1;
 }
 for(let key in countMap){
    if(countMap[key] === 1){
       uniqueArr.push(parseInt(key));
    }
 }
 return uniqueArr;
}

const res = findDistinctInteger([...arrOne,...arrTwo,...arrThree, ...arrFour]);
console.log(res);