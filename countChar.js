const countChar = (str, alpha) => {
    str = str.toLowerCase();
    alpha = alpha.toLowerCase();
    let totalCount = 0;
    // const totalCount = str.split('').reduce((acc, curr) => {
    //     if (curr === alpha) {
    //         acc++;  
    //     }
    //     return acc;
    // }, 0);
    // return totalCount;
    for(let i=0; i<str.length; i++) {
        if(str[i] === alpha) {
            totalCount++;
        }
    }
    return totalCount;
};

const res = countChar('mississIppi', 'I');
console.log(res);
