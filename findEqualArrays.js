const equalArray = (arr1,arr2) => {
    if(arr1.length === arr2.length){
        return true;
    }
    else if(arr1.includes(arr2)){
        return true
    }else{
        return false
    }
}

const res = equalArray([1],[1]);
console.log(res)