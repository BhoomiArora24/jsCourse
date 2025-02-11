const accountId= 1234;
let accountEmail="navyaarora24@gmail.com";// can be changed //scope is within the block of code
var accountPassword="Navya";// can be changed
/*
prefer not to use var
because of issue in block of scope and functional scope
It has global scope 
*/

accountCity ="Jaipur";[ // should not be used but can be done
]
let accountState;
// accountId=2; //not allowed as const can not be changed
accountEmail="navya34@gmail";
accountCity="Bangluru";//it changes even after not using var or let

console.log(accountId);

console.table([accountId, accountEmail, accountCity, accountState]);