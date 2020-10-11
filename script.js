const num = 266219;

const str = num.toString();
const prdct = str[0] * str[1] * str[2] * str[3] * str[4] * str[5];
//console.log(prdct);

const prdctX3 = prdct**3;
//console.log(prdctX3);

const digits = prdctX3.toString();
console.log(digits.substring(0, 2));
