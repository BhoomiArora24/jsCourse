const prompt =require('prompt-sync')();
// let c="Navya";
// let d=24;
// console.log(c+d);
// console.log(typeof c);
// const e={
//   name:"Navya",
//   age:"19"
// }
// console.log(e);
// console.log(e["age"]);
// e["course"]="BCA";
// console.log(e);
// let a=45;
// let b=78;
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b); 
// console.log("a++=",a++);
// console.log("a=",a);
// a+=5;
// console.log(a);
// a*=2;
// console.log(a);
let comp1=6;
let comp2=7;
console.log("comp1==comp2=", comp1==comp2);
console.log("comp1!=comp2=", comp1!=comp2);
console.log("comp1===comp2=", comp1===comp2);
console.log("comp1!==comp2=", comp1!==comp2);
// let a = prompt("Hey what's your age?");
// a= Number.parseInt(a);
// if(a<18){
//   alert("This is not a valid age don't even think of driving");
// }
// else if(a>18){
//   alert("You can drive");
// }
// else{
//   alert("This is an invalid age")
// }
// const b= "red";
// switch(b){
//   case "blue":
//       console.log("The light is blue");
//   case "green":
//     console.log("The light is green");
//     break;
//       default:
//         console.log("The light is not green or red");
// }
// let a;
// console.log("You can", (a>18? "drive": "not drive"));
// let a=10;
// let b=20;
// let c= prompt("Enter your age:");
// c=Number.parseInt(c);
// console.log(c>a && c>b);
// for(x=0; x<34; x++){
//   console.log(x);
// }
// // program to add first n natural number
// console.log("New Iteration")
// let sum=0;
// let n=prompt("Enter the value of n:");
// n=Number.parseInt(n);
// for(var i=1; i<n; i++){
//   console.log(sum+=i)
// }
// console.log("sum of first" +n +"natural number is" +sum);
// console.log(i);
// let fact=1;
// let r=prompt("Enter the value of r:");
// r=Number.parseInt(r);
// for(let p=1; p<=r; p++){
//   console.log(fact*=p);
// }
// console.log("sum of first " + r +" natural number is " +fact);
// let obj = {
//   harry: 90,
//   shuch: 85,
//   vansh: 90,
//   harshit: 97
// }
// for (let a of "harshit"){
//   console.log(a);
// }

//while loop

// let n=prompt("Enter value of n:");
// n=Number.parseInt(n);
// let i=0;
// while(i<n){
//   console.log(i);
//   i++;
// }

//do-while loop

// let n=prompt("Enter value of n:");
// n=Number.parseInt(n);
// let i=0;
// do{
//   console.log(i);
//   i++;
// }while(i<n)

// functions

function avg(x,y){
  console.log("Done");
  return (x+y)/2;
}

const navya = (p,q)=>{
  return p+q;
}

const hello = ()=>{
console.log("hey, I am Navya");
return "hii";
}

let a=1;
let b=2;
let c=3;
console.log("Average of a and b is ", avg(a,b));
console.log("Average of c and b is ", avg(c,b));
console.log("Average of a and c is ", avg(a,c));

console.log(navya(a,c));
hello();

let marks={
  harry: 90,
  shubham: 87,
  navya: 100,
  rahul: 78
}
for (let i=0; i<Object.keys(marks).length; i++){
  console.log("The marks of " + Object.keys(marks)[i]+" are " + marks[Object.keys(marks)[i]]);
}