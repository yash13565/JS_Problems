const generateHash = (str) => {
if(str.length > 280 || !str) return false;
const hash = '#' + str.replaceAll(' ','').toUpperCase()
return hash;
}


const res = generateHash('My name is Yashwardhan');
console.log(res);