//Find max number without using any inbuilt method


const arr = [1,2,4,6,12];
let max = 0
const findMax = (arr) => {
    for(let i=0; i<arr.length;i++){
       if(arr[i] > max){
        max=arr[i]
       }
    }
    return max
}


const res =  findMax(arr)
console.log(res)