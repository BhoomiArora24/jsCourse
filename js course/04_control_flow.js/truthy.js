const userEmail =[];
//assumes truthy or falsy value and gives the result
if(userEmail){
  console.log("got User Email");
}
else{
  console.log("No User Email");
}

//falsy values

// false, 0, -0, bigInt- 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', "false", " ", [], {}, function(){}//empty function

if(userEmail.length ===0){
  console.log("Empty");
}

const emptyObj ={};

if(Object.keys(emptyObj).length === 0){
  console.log("Object is Empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10//output: 5
// val1= null ?? 10//output: 10
// val1 = undefined ?? 15//output: 15
val1 =  null??10??20//output: 10


console.log(val1);

///Terniary Operator
//condition ? valueIfTrue : valueIfFalse

const Price= 100;
Price<=80 ? console.log("less than 80") : console.log("more than 80");