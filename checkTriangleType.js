const checkTriangle = (a, b, c) => {
    if(a===b && b===c) {
        return 'Equilateral';
    }else if(a===b || b===c || c===a) {
        return 'Isosceles';
    }else{
        return 'Scalene';
    }
}


const res = checkTriangle(3, 3, 3);
const resTwo = checkTriangle(3, 4, 3);
const resThree = checkTriangle(3, 4, 5);

console.log(resTwo);
