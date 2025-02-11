//singleton- when we declare like literals to no singleton
//but when declared through constructor then yes for singleton

//object literals

const mySym= Symbol("key1");

const jsUser= {
  name:"Navya",    //accessed as "name":"Navya"
  "fullName": "Navya Arora",
  [mySym]:"myKey1",//way to use symbol in object
  age:"19",       //but to be written like this only
  location:"Delhi",
  email:"aroranavya78@gmail",
  isLoggedin: false,
  lastLoginDays: ["Monday", "WednesDay"]
};
console.log(jsUser.email);
console.log(jsUser["email"]);//inverted commas must be used kyoki compiler use string ki tarah acess kra h to hme bhi string bnanana pdega use
console.log(jsUser["fullName"]);
console.log(jsUser.fullName);
console.log(jsUser[mySym]);
console.log(typeof (jsUser.mySym));//undefined

jsUser.email= "aroranavya.chatgpt@gmail";
// Object.freeze(jsUser);//freezes the object no change can be done
jsUser.email="aroranavya.micro@gmail.com";
console.log(jsUser);

jsUser.greeting=function(){
  console.log("Hello JS User");
}

jsUser.greeting2=function(){
  console.log(`Hello JS User ${this.name}`);//this- to access properties of jsUser
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
console.log(jsUser.greeting);



//mostly accessed everything through .email etc... but in some special cases [] is uses ex: symbol