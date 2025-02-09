const findFactorial = (num) => {
if(num === 0 || num ===  1){
    return 1;
}
else{
    return num * findFactorial(num -1)
}
}

const res = findFactorial(0)
console.log(res)