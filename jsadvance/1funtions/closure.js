//CLOSURE-- a function jo return krega ek or function and returned function will always use parent function ka koi variable 

function abc(){
    let a = 10;
    return function def(){
        console.log(a);
    }
}

abc();

//LEXICAL SCOPING -- 

function abcd(){
    let a = 10;//a can be accessed in the whole abcd function
    function defg(){
        let b = 11;//b can be accessed in the whole defg function
        function hijk(){
            let c = 12;//c can be accessed in the whole hijk function
        }
    }
}