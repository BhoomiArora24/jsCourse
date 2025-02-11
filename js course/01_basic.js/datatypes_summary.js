// Primitive: Call by value (original value not given copy is given and all the changes are also made in copy)

// 7 types: String, number, boolean, null, undefined, Symbol, bigInt

//reference or Non primitive

//Array, Objects , functions 

const heroesArray = ["Navya", "Esha", "avinash"];
let myObj ={
  name :"navya",
  age : 23
}

const myFunction =function(){
  console.log("Hello");
}

console.log(typeof heroesArray);// output: obj
console.log(typeof myFunction);//output :function
console.log(typeof myObj);//output: obj


//**************************Stack heap memory ****************/
//stack(for primitive), heap(non-primitive)

let myYoutubeName="navyaaroraofficial";

let anotherName= myYoutubeName;
anotherName= "Netflix aur Code"
console.log(anotherName);
console.log(myYoutubeName);

let userOne ={
  email: "user@gmail.com",
  upi: "user@ybl"
}

let userTwo =userOne

userTwo.email="navya@gmail";

console.log(userOne.email);
console.log(userTwo.email);