function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
let c = counter();//c is running the return function
//also if u see the output which is 1 2 3 for all the called c 
//so here we can see the count is not not loosing its value 
c();//increament from 0 to 1
c();//increament from 1 to 2
c();//increament from 2 to 3

let d = counter();//same explaination here + d is again starting from 0 beecause it is giving its copy which is being updated not the actual value 
d();
d();
c();// 4 output coz 3 is being incremented to 4 

//---------------------
console.log("pure function transform to change a value");
function double(val){
    return val *= 2
}
console.log(double(2));
// not changing any outer varible so it's a pure function

//-----------------
console.log("IIFE to create secret variable");

(function(){
    const secretPass = "Navya";
    console.log(secretPass);// can only be accessed inside the function as IIFE create private varibles
})();
console.log(secretPass);//cannot be accessed outside the function as IIFE create private varibles so it will give error saying undefined