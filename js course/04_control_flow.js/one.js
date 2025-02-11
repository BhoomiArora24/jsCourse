//if statement

const isUserLoggedIn = true;// = value assigning operator
//2===2 checks the value as well as dtype
if(isUserLoggedIn === false) {
  console.log("executed");
} else {
  console.log("non executed")
}

const score=200;

if(score>=200) {
  const power ="fly";
  console.log(`User power: ${power}`)
}

const balance = 500;
//implicit scope- executes in one line or there is one more way
if(balance>=500) console.log("test");
//or
// if(balance>=500) console.log("test"),
// console.log("test2");//but not advised to follow



//nesting
if(balance<300){
  console.log("less than");
}else if(balance<400){
  console.log("less than 400");
}else{
  console.log("greater than 400");
}


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
  console.log("Allowed to buy the course");
}

if(loggedInFromGoogle || loggedInFromEmail){
  console.log("UserLoggedIn");
}



//switchCaseStatement

const month = 3;

switch(month){
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;//if break not used to age ka sara print hojaega
  case 4:
    console.log("April");
    break;
  default:
    console.log("Month does not belong to it");
    break;
}
const month2 = "Apr";

switch(month2){
  case "jan":
    console.log("January");
    break;
  case "Feb":
    console.log("February");
    break;
  case "Mar":
    console.log("March");
    break;//if break not used to age ka sara print hojaega
  case "Apr":
    console.log("April");
    break;
  default:
    console.log("Month does not belong to it");
    break;
}