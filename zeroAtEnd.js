const arr =  [1,0,2,3,1,0,0,4,0]

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] < arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
        }
    }
}
console.log(arr)