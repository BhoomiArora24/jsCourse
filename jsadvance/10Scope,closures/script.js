//scope hai ke ap apne created variables and functions ko ska tk use kr skte ho
function abcd(){
    var a = 12;//functional scoped as created by var
}
//scope -- functional scope, global scope , block scope

//functional scoped- function ke andar hi use ho skti h
function abc(){
    var a = 11;
}
//global scope- pure code m khi bhi use ho skta h
var a = 5;

//block scope - {} curly braces me hi use ho skta h
if(a>5){
    var b = c;
}