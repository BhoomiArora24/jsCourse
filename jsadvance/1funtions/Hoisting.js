//HOISTING IN FUNCTION
abc();//function statement or decleration can be hoisted 
//as the function can be --called-- even before declaring the function



function abc(){
    console.log("hii");
}

def();//function expression can-not be hoisted 
//as the function can-not be --called-- before the function expresion
//it can only be called after the function expression
//so it will give this error: ReferenceError: Cannot access 'def' before initialization

let def = function(){
    console.log("bye")
}
