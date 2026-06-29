//Q1 Deffernce between function declaration and expression in terms of hoisting?
//function declarationcan be hoisted  and expression cannot be hoisted

// Convert into an arrow function
// function multiply(a,b) {
//     return a*b;
// }

let multiply = (a,b) => {
    return a*b;
}

multiply(5,4);

//-----------------
function demo(a,b,c){}
demo(1,2)
//a=1, b=2, c=undefined



//-----------------
//Use rest parameter to  accept any number of scores and return the total

function score(...scores){
    let total = 0;
    scores.forEach( function(val){//forEach value of scores a function is getting called that is storing its value in val and doing further
        total += val
    })
    return total;
}
console.log(score(12,14,16,18));


//------------------
function checkage(age){
    if (age > 18) {
        console.log("not allowed");
    }
    else{
        console.log("Not Allowed");
    }
}

//fix the above function using early return
function checkAge(age){
    if (age > 18) return "not allowed";
    return "Not Allowed";
}

console.log(checkAge(23));


//----------------
//What will this function return

function f(){
    return;
}
console.log(f());
//it will return undefined

//--------------
//What does it mean when we say "functions are first class citizens"?
//ANS - coz functions are treated same as values 
//    - functions can be stored in a variable
//    - a function can also be passed as an argument in a function


//----------
// Pass a function into another function and execute it inside

function abcd(val){
    val();
}
abcd(function(){
    console.log("Hii");
})

//----------------

let totals = 0;
function addtoTotal(num){
    totals +=num;
}
//Convert above function into a pure function
let total = 0;
function addToTotal(num){
    let newTotal = total;
    newTotal +=num;
}
//Now anything inside the function is not affecting /changing the outer variables or something

//------------------
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
let counter = outer();
counter();
counter();

//---------------------
//Contert this normal function into an IIFE
(function init(){
    console.log("initialized");
})();

//------------------------
//What is the usecase of IIFE?Name one real world useCase
//----It creates private variable example below
(function(){
    let score = 0;
})();

//--full example-------------------------------IMPORTANT------------------------
let shery = (function(){
    let score = 0;
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})
