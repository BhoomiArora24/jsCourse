//SORT , FOREACH, MAP , FILTER , REDUCE---- ALL OF THEM ACCEPTS A FUNCTION ONLY


//FOREACH - GOES TO EVERY OTHER ELEMENT AND THEN DOES WHATEVER CHANGE IS REQUIRED TO DO
let arr = [67, 34, 69, 23, 46];
arr.forEach(function(val){
    console.log(val);
})
//for each -- the function it is accepting will run for every simgle element of arr


//-----------------------------------------
//MAP, FILTER, REDUCE -- GOES TO EVERY OTHER ELEMENT AND RETURN SOMETHING
//RETURN MUST--------------
//will always have atleast one value as a param in function 

//------------------------------------------
//MAP --- TO BE USED ONLY WHEN -- JB APKO EK NYA ARRAY BNANA HAI PAICHLE ARRAY KE DATA KE BASE PE
//AGAR PURANE ARRAY CONTAINS 5 ELEMENT THEN NEW ARRAY WILL ALSO CONTAIN SAME NO. OF ELEMENTS
//WHENEVER U SEE MAP CREATE A BLANK NEW ARRAY IN YOUR MIND

let hii =  [34, 52, 68, 92, 14];
let byee = hii.map(function(val){
    return val+5;
});
console.log(hii);
console.log(byee);

let hiii = [4, 7, 15, 2, 16];
let hello = hiii.map(function(val){
    if (val > 10) return val;
    else return val + 10; 
})
console.log(hello);

//-----------------------------------------
//FILTER-- PURANE ARRAY SE KUCH ELEMENT NEW ARRRAY ME LATA H AND KUCH KO CHOD DETA H 

let yoo = [1, 2, 3, 4, 5, 6, 7];
let yess = yoo.filter(function(val){
    if (val > 4) return true;
});
console.log(yess);

//-------------------------------------------
//REDUCE -- TO REDUCE A WHOLE ARRAY INTO ONE SINGLE ELEMENT 

let lesgoo = yoo.reduce(function(accumulator, val){
    return accumulator + val;
}, 0);
//accumulator is defined as 0 then after adding to val its value keeps on changing
//DRY RUN
// accumulator = 0, val = 1-- 0 + 1 = 1
// accumulator = 1, val = 2-- 1 + 2 = 3
// accumulator = 3, val = 3-- 3 + 3 = 6
// accumulator = 6, val = 4-- 6 + 4 = 10
// accumulator = 10, val = 5-- 10 + 5 = 15
// accumulator = 15, val = 6-- 15 + 6 = 21
// accumulator = 21, val = 7-- 21 + 7 = 28

console.log(" yoo reduced into single element: " + lesgoo);
//OUTPUT 28 SAME AS DRY RUN


//-------------------------------------------
//FIND-- RETURN THE FIRST ELEMENT THAT SATISFIES ARE CONDITION IN AN ARRAY

let findInArray = yoo.find(function(val){
    return val === 5;
})
console.log("let's find element in yoo array: " + findInArray);

//-------------------------------------------
//SOME --in An array if any element satisfies the condition returns T/F
let someMethod = yoo.some(function(val){
    return val > 6;
})
console.log(someMethod);


//----------------------------------------------
//EVERY --in An array if all element satisfies the condition returns t/F
let everyMethod = yoo.every(function(val){
    return val > 5;
})
console.log(everyMethod);