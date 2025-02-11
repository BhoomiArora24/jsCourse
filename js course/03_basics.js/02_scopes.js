// var c=300;
let a=300;
if (true){
  let a =10;
const b = 23;
// var c =30;//var is mostly not used
console.log(a);//block scope its lifetime is within the bock of code
}


// console.log(a);
// console.log(b);
console.log(a);//global scope its lifetime is throughout the full code

//nested Scope

function one(){
  const username = "Navya"

  function two(){
    const website ="youtube"
    console.log(username);
  }
  // console.log(website);cannot be executed because it is outside the loop

  two()

}

one()

//through if - else

if(true){
  const username="navya"
  if(username=="navya"){
    const website ="youtube"
    console.log(username+website);
  }
  // console.log(website);
}
// console.log(username);



//++++++++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++++++++++++

console.log(addone(5))

function addone(num){
  return num+1;
}


// addTwo(5)- cannot be accessed before initialization
const addTwo =function(num){//new way to address a function through variable
  return num+2;
}

addTwo(5)