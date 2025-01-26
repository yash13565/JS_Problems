//Remove Duplicates from an array without using Set.
const arr  = [1,2,3,1,3,4,5]
const uniqueArr = [];
for (let  i=0;i<arr.length;i++) {
   if(!uniqueArr.includes(arr[i])) {
       uniqueArr.push(arr[i]);
   }
}
console.log(uniqueArr);