//this keyword -- special keyword, kyuki jaise ki baki sare kewword ki value ya uska nature same rehta h , this ka nature badal jata h is bat se ki ap use kha use kre ho

//global scope
console.log(this);//window

//function
function abcd(){
    console.log(this)//window
}

abcd();

//method
let obj = {
    name: "harsh",
    sayName: function(){//ek aisa function jo obj ke andar ho use method kehte h 
        console.log(this);//method ke andar this value hmara obj ho jata h
    },
}

obj.sayName();

//can't be an arrow function as it will loose its value and will become window again -- why??
//solution -- arrow function hmesha apni this ki  value parent se lete h and sayName ka parent h obj which is global scoped to that's why it becomes window
// //agar hmne method ke andar ek function or bna diya to this apni value fir kho dega to use handle krne k liye andar wale m hmesha arrow function bnao


//event handler
document.createElement("h1").addEventListener("click", function(){
    console.log(this);//here it is h1 so jispe event lga h that will become --this--
})

class Abcd{
    constructor(){
        console.log("dfghj");
        this.a = 12;
    }
}

console.log(new Abcd());
//at the place of this a blank object created by new comes and stores the value in there
//classes me this ki value blank object hoti h jb hm use new word ke sath call krte h



// //this keyword - is a special keyword, coz jaise ki baki sare keyword key value ya unka nature same rehta h this ki value ya nature badal jata h is baat se ki aap use kaha use kre ho


// //global scope
// console.log(this);//window


// //function scope
// function abc(){
//     console.log(this);
// }
// abc();//window



// //method -- a function that is inside the object
// let obj = {
//     name: "navya",
//     sayName: function(){
//         console.log(this);
//     }
// }
// obj.sayName();//{name: 'navya', sayName: ƒ}

// //it cannot have an arrow function as it will loose its object and give window as output

// //method ke andar this is the whole object that is why it is printing the full object we could even have asked for this.name also here
// //but because it was written just this so it is giving the full object




// //event handler
// document.querySelector("h1").addEventListener("click", function(){
//     console.log(this);//addEventListener ke pehle jo bhi h vo this h so here its h1
// })


// //class
// class Abcd{
    
//     constructor(){
//         console.log("hiiiiii");
//         this.a= 12;
//     }
// }
// console.log(new Abcd());
// //at the place of this a blank object created by new comes and stores the value in there



// //call apply bind
// //function ko call krte vakt aap set kr skte ki uski this ki value kya hogi

// //call
// let obj2 = {
//     name: "navya"
// }
// function abcd(){
//     console.log(this)
// }
// abcd()// window write now

// abcd.call(obj2); //now obj will become -- this value

// //apply - ek se zada param bhej rhe ho
// let obj1 = {
//     name: "navya",
//     age: 21
// }
// function abc(a, b, c){
//     console.log(this, a, b, c);
// }
// abc.apply(obj1, [1,2,3]);

// //bind-- creates a new function 
// //does not run in usual way
// // it creates a copy of the function
// let fn = abc.bind(obj1, 1, 2, 3);
