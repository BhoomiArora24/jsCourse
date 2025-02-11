const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach( (item) => {
  console.log(item);
  return item;//forEach does not return value gives undefined instead
})

console.log(values);
//filter checks and give the output only if the condition is true
const myNums = [1,,2,3,4,5,6,7,8,9];

const newNums = myNums.filter( (num) => num>4);

const newNums2 = myNums.filter( (num) => {
  return num>4//return keyword is used while using {} coz of scope
});
console.log(newNums2);
console.log(newNums);


//same method through forEach
const newNums3=[];
myNums.forEach( (num) => {
  if(num>4) {
    newNums3.push(num)
    }
    })
    console.log(newNums3);