//classical inheritance 
//classes bnana and unhe extend krdena

//inheritance - ek class dusri class se kuch leti h


//prototypal inheritance -- only in js
//object-  object se inherit krta h
//ek object h aap chaho to uski saari props/methods ko inherit kara dete doosre object mein
let a ={};
let b = Object.create(a);
//ab a me jo jo hoga b ke pas uska access h
let c = {...a};//why not this?as this creates hard copy and Object.create creates a shared memory
let coffee = {
    color: 'dark',
    drink: function(){
        console.log("gut giut gut");
    },
}

let arabiataCoffee = Object.create(coffee);//Object.create will join the prototype of coffee with arabitaCoffee
console.log(arabiataCoffee);
//output: 
//{}
// [[Prototype]]: 
//   Objectcolor: "dark"
//   drink: ƒ ()
// [[Prototype]]: Object

arabiataCoffee.taste = "bitter";
arabiataCoffee.drink();