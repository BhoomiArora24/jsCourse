const score = 400;
console.log(score);//output:400

let balance= new Number(100);
console.log(balance);// output:[Number: 100]

console.log(balance.toString().length);//output: 3
console.log(balance.toFixed(2));//output: 100.00

const otherNumber= 23.5678;
console.log(otherNumber.toPrecision(3));//output: 23.6

const anotherNumber= 123.5678;
console.log(anotherNumber.toPrecision(3));//output: 124

const hundreds = 1000000;
console.log(hundreds.toLocaleString());//output: 1,00,00,000

//****************************MATHS********************* */

console.log(Math);
console.log(Math.abs(-4));//only -changes to + output:4
console.log(Math.round(4.3));//output: 4
console.log(Math.ceil(4.3));//output: 5//zara sa bhi 4 se zada hua to bhi top value choose krega
console.log(Math.floor(4.3));//output: 4//zara sa bhi
console.log(Math.min(4,3,6,8))
console.log(Math.random());//value will always be between o and 1
console.log(Math.random()*10);
console.log((Math.random()*10)+1);//guaranteed value will not be zero
console.log(Math.floor(Math.random()*10)+1);

////////////////////////IMPORTANT////////////////////

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);