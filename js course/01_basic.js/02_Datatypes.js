"use strict"; //use the code newer version of js

// alert(3+3)//we are using node js not browser so this can only be run in browser

console.log(3+3);
console.log("Navya");

let name="navya";// string
let age=20; //number
let isloggedIn = false //boolean

//number=> 2 to power 53
const bigNumber=567893456789002356789n//bigInt
//string
//boolean
//null =standalone value
//undefined= no value assigned till now
const id =Symbol('123')//symbol => unique
const anotherId =Symbol('123')//symbol => unique

console.log(typeof anotherId);//output:symbol


console.log(id==anotherId);//output: false


//object

//interview important
console.log(typeof null); //output=object
console.log(typeof undefined); //output= object
console.log(typeof bigNumber);//output:bigint