let num = 266219;
let sum = 1;
let sum2;
let sum3;


while (num > 0) {
    sum *= num % 10;
    num = Math.floor(num/10);
}
sum2 = sum ** 3;
sum3 = sum2.toString();
console.log(sum3.substring(0, 2));
