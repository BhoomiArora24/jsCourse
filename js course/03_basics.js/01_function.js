function sayMyName(){
  console.log("N");
  console.log("A");
  console.log("V");
  console.log("Y");
  console.log("A");
}

sayMyName()

function addTwoNumbers(number1, number2){
  let result= number1+ number2;
  console.log(result);
  console.log("Navya");//this can only be done before return no console will be printed after return
  return result;
}

const result = addTwoNumbers(3,4);
console.log("Result: ",result);


function loginUserMessage(username="sam"){
  if(username== undefined){
    console.log("Please enter your username");
  }
  return`${username} just logged in`;
}
console.log(loginUserMessage());//agar kuch pass na kiya ho to undefined ajaega
console.log(loginUserMessage("navya"));//if we pass username it will print the username


//rest operator
function calculateCartPrice(...num1){
  return num1;
}

console.log(calculateCartPrice(200,400,500,600))

function calculateCartPrice2(val1,val2,...num1){ //val1 stores 200, val2 stores 400, and the remaining comes in the form of array
  return num1;
}

console.log(calculateCartPrice2(200,400,500,600))
const user ={
  username:"navya",
  price: 199
}

function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
console.log(handleObject(user))
//another way to call the function
// console.log(handleObject({
//   username:"navya",
//   price: 199
// }))


//for an array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 100, 600]));//another way to call the function
