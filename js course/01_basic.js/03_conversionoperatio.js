let score =true;

console.log(typeof score);//output: boolean
console.log(typeof (score));//output: boolean

let valueInNumber = Number(score);
console.log(typeof valueInNumber);//output: number
console.log(valueInNumber);//output: 1

//"33" = 33
//"33abc" = Nan
//true = 1, false= 0
//null=0

let isLoggedIn= "";
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//1= true
//0= false
//""=false
//"navya"= true


let someNumber= 33;
let stringNumber= String(someNumber);
console.log(stringNumber);

console.log(typeof stringNumber);

// *************************Operations*************************

let value=3;
let negValue= -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

let str1="Navya ";
let str2="Arora";
console.log(str1 + str2);

console.log("1"+2);//output: 12
console.log(1+"2");//output: 12
console.log("1"+2+2);//output: 122
console.log(1+2+"2");//output: 32
console.log((3+4)*(5%6));//output: 35
console.log(true);//output: true
console.log(+true);//output: 1
console.log(+"");//output: 0


let num1, num2, num3;
num1=num2=num3=2+2;

let gameCounter=100;
gameCounter++;
console.log(gameCounter);//output: 101
console.log(gameCounter);//output: 101

let gamesCounter=100;
let r=gameCounter++;
console.table([r, gamesCounter]);//output: 101,100//here stack memory states that gamesCounter is giving 
//the copy of its own to r so that is why there is no change in the actual value of games counter

let a=100;
++a;
console.log(a);
console.log(a);
