const name = "navya";
const repoCount = 15;
// console.log( name+ repoCount+" Value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('navya-aa');//another way of defining a string
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));//tells the character through its index
console.log(gameName.indexOf('a'));//tells the position through index

const newString = gameName.substring(0,4);//output: navy index 4 no included
//will only start giving value through index 0 doesn't matter whatever is entered (-8,4) 
//it will start through 0 only 
console.log(newString);

const anotherString= gameName.slice(-7,4);
console.log(anotherString);

const newStringOne= "      navya     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url= "https://www.youtube.com/20%watch?v=sscX432bMZo&t=7961s";
console.log(url.replace('20%','-'));//output: https://www.youtube.com/-watch?v=sscX432bMZo&t=7961s
console.log(url.includes('you'));//output: true

console.log(gameName.split('-'));//output: [ 'navya', 'aa' ]
