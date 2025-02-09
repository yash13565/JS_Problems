const arr = [1,2,4,5,6]

function calAverage (arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum/arr.length
}

const res = calAverage(arr);
console.log(res);