const coding = ["js", "ruby", "java", "python", "cpp"];
              //call back function- has no name    
coding.forEach( function (item) {
  console.log(item);
} )
//arrow function 
coding.forEach( (val) => {
  console.log(val);
})

function printMe(value){
  console.log(value);
}

coding.forEach(printMe);

coding.forEach( (item, index, arr)=> {
  console.log(item, index, arr);
})

const myCoding =[
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "javat",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  }
]

myCoding.forEach( (item) => {
  console.log(item.languageName);
})
