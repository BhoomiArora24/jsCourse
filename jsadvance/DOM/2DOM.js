//Attribute manipulation
//anyhting except tag is attribute
// <html lang="en"> lang is attribute here

let a = document.querySelector("a");
console.dir(a);
// if href not given it automatically takes href as the webpage url
//now let's change 
//1st way
// a.href = "https://www.google.com";

//2nd way
//1st tell which attribute u want to set 2nd tell its value that is google.com
a.setAttribute("href","https://www.google.com");


let b = document.querySelector("img");
b.setAttribute("src","https://i.pinimg.com/736x/9f/77/69/9f776960b5fe247c5cd748caaf53ccd8.jpg");





//--GET ATTRIBUTE---
let c = document.querySelector("a");
// console.log(a.getAttribute("href"));


//removing an attribute
a.removeAttribute("href");