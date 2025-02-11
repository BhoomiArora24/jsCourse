const user ={
  username:"navya",
  price:999,

  welcomeMessage: function() {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  }

}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this);//we are in a node 
//coz pehle js sirf browser me hi tha but ab standalone engine hto jb hm yhi browser me krte h to it shows properties of windows


// function coffee(){//it works
//   console.log(this);
// }
// coffee();

function chai(){//it gives undefined as output
  let username="navya"
  console.log(this.username);
}
chai();

const chai2= function(){//it gives undefined as output
  let username="navya"
  console.log(this.username);
}
chai2();


//using arrow function
const chai3= ()=>{//it gives undefined as output
  let username="navya"
  console.log(this);
}
chai3();

//explicit return
const addTwo = (num1, num2)=>{
  return num1+num2;//with curly braces return  is used
}
console.log(addTwo(5,6));

//implicit return
const addTwo1 = (num1, num2)=> num1+num2;
// OR
// const addTwo1 = (num1, num2)=> (num1+num2);
// const addTwo1 = (num1, num2)=> ({username: "navya"});


console.log(addTwo1(5,6));