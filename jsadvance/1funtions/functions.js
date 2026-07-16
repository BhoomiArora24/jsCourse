//what are functions
//the code should not run automatically if its written
//it should only run when asked that's what functions are for
//a button clicked function called task done 
//button didn't got clicked task will not be executed

//FUNCTION DECLERATION
function navya(){
    console.log("Hii");
}

navya();

//FUNCTION EXPRESSION(CALLING A FUNCTION THROUGH VARIABLE)
let hii = function(){
    console.log("Hii")
}
hii();

//IMPORTANTS
//function cannot start with keywords, numbers, special characters

//ARROW FUNCTION(also known as FAT ARROW FUNTION)
let nice = () => {
    console.log("HII NAVYA");
}

nice();

//PARAMETERS AND ARGUMENTS
function hlo(v1){
    //v1 above is a parameter
    console.log(`${v1} hii`);
}

hlo("navyaaa");
hlo("girl");
hlo(navya); //output: function navya(){   ----- here passing the whole navya function to hello not even calling it
            //console.log("Hii");
            // } hii
hlo(navya()); //output: undefined hii  --- as in function navya there is no return statement so it is giving undefined

//DEFAULT PARAMETERS
function add(v1, v2){// here v1, v2 are declared but there value is not given when called so v1, v2 comes as undefined 
    console.log(v1+v2);//now as here we are trying to add v1+v2 therefore, undefined + undefined becomes --nan-- as output
}

add();

//so lets give default values here
function addnow(v1 = 0, v2 = 0){//but in this case we are giving them default values so if in case to value is given when called then they will take default values and continue the function accordingly
    console.log(v1+v2);
}

addnow();

//REST PARAMETER
//too many arguments to handle ise bachne k liye we use rest parameter "..." i.e three dots
function abcd(...val){
    console.log(val);
}

abcd(1,2,3,4,5,6,7,8,9);

function abcde(a,b,c, ...val){
    console.log(a,b,c, val);
}

abcde(1,2,3,4,5,6,7,8,9);

//SPREAD VS REST
// SPREAD-- Expands an array/object into individual elements
//Used while calling a function or creating arrays/objects
// Spread = Expand

//REST -- Collects multiple elements into a single array/object
//Used while defining a function or destructuring
//Rest = Collect

//RETURN
function nivi(){
    return 12;
}
let value = nivi()//jha se aya h vhi jata h (it goes to the place from where it is called)
console.log(value);

//HIGH ORDER FUNCTIONALITY-- hof is a function jo ki ya to return kre ek function ko OR/AND accept kre function kro as its argument

//Ex: accept kre function kro as its argument
function sdf(val){
    val();//calling  --val-- as function explained below
}
sdf(function(){//accepting function in an argument which is internally equal to val as we are giving the argument for val here therefore in the higher order function we can call --val-- as funtion here
    console.log("Hii")
})

//EX: return kre ek function
function efg(){
    return function(){
        console.log("hii");
    }
}

efg()();
//1st bracket for calling efg function
//2nd bracket for to run the function that is inside efg()


//PURE FUNCTION VS IMPURE FUNCTION
//pure function -- aisa function jo bahar ki value ko change na kre
function dfg(){
    console.log("hehehe")
}

//impure function -- aisa function jo bahar ki value ko change kr de
function ghj(){
    a++;// a value changes so impure 
}

