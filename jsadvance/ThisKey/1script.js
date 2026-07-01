//this keyword - is a special keyword, coz jaise ki baki sare keyword key value ya unka nature same rehta h this ki value ya nature badal jata h is baat se ki aap use kaha use kre ho


//global scope
console.log(this);//window


//function scope
function abc(){
    console.log(this);
}
abc();//window



//method -- a function that is inside the object
let obj = {
    name: "navya",
    sayName: function(){
        console.log(this);
    }
}
obj.sayName();//{name: 'navya', sayName: ƒ}

//it cannot have an arrow function as it will loose its object and give window as output

//method ke andar this is the whole object that is why it is printing the full object we could even have asked for this.name also here
//but because it was written just this so it is giving the full object




//event handler
document.querySelector("h1").addEventListener("click", function(){
    console.log(this);//addEventListener ke pehle jo bhi h vo this h so here its h1
})


//class
class Abcd{
    
    constructor(){
        console.log("hiiiiii");
        this.a= 12;
    }
}
console.log(new Abcd());
//at the place of this a blank object created by new comes and stores the value in there



//call apply bind
//function ko call krte vakt aap set kr skte ki uski this ki value kya hogi

//call
let obj2 = {
    name: "navya"
}
function abcd(){
    console.log(this)
}
abcd()// window write now

abcd.call(obj2); //now obj will become -- this value

//apply - ek se zada param bhej rhe ho
let obj1 = {
    name: "navya",
    age: 21
}
function abc(a, b, c){
    console.log(this, a, b, c);
}
abc.apply(obj1, [1,2,3]);

//bind-- creates a new function 
//does not run in usual way
// it creates a copy of the function
let fn = abc.bind(obj1, 1, 2, 3);
