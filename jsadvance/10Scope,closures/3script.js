//Lexical scoping- js follows
//dynamic scoping

//lexical scoping -- ki ap kha pr physically availaible ho ye puri tareeke se depend krta hai ki ap kya access kr paoge

function abcd(){
    let a = 12;//can be scoped anywhere in the function as it is lexically scoped in abcd function
    function defg(){
        console.log(a);
    }
}

//dynamic scoping- kha se call kr re ho uspe depend krega ki kya value milegi

let a = 12;

function abc(){
    console.log(a)
}

function dfg(){
    let a = 13;
    abc();//will take the value of globaly scoped a because js is lexically scoped 
    //if it was dynamically scoped so it would take the a as 13 
}

dfg();