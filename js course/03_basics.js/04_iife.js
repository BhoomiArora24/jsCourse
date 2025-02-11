//Immediately Invoked Function Expression(IIFE)

//global scope ke pollution ko htane k liye we use IIFE  
(function chai(){
  console.log(`DB CONNECTED`);
})();//semicolon must be used here to end this code to execute the next one
// // 1st () is for func defining and 2nd () is for execution call

(   (name)  =>  {
  console.log(`DB CONNECTED TWO ${name}`);
})('navya');
