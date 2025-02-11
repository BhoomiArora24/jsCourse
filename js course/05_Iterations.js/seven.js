const myNumbers = [1,2,3,4,5,6,7,8,9]

const newNums= myNumbers.map( (num) => num+10)
console.log(newNums); 
//Output: // [
//   11, 12, 13, 14, 15,      
//   16, 17, 18, 19
// ]
//through scope {}
const newNums2= myNumbers.map( (num) => {return num+10})
console.log(newNums2);

// chaining can be done kitna bhi chaho
const newNums3 = myNumbers
     .map( (num) => num*10)//chaining passes the result to 2nd line
     .map( (num) => num+1)
     .filter( (num) => num>=40)
     console.log(newNums3);