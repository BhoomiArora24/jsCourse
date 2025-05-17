const user = {
    userName: "Navya",
    loginCount: 8,
    signedIN: true,

    getUserDetails: function(){
        // console.log("Got User Details from database");
        // console.log(`userName: ${this.userName}`)
        console.log(this);

    }
}



        

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

// const promise = new Promise();
// new keyword = constructor function used to make a new context

function User(username, loginCount, isLoggedIn){
    this.userName = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Hello ${this.userName}!`);
    }

    return this;//be default defined whether we write or note
}

// const userOne = User("Navya", 3, true);
// const userTwo = User("Arora", 1, true);//overriding the first one even after asking for userOne
// console.log(userOne);

//for no overriding
const userOne = new User("Navya", 3, true);
const userTwo = new User("Arora", 1, true);
console.log(userOne);


//New
//step 1: an empty obbject created
//constructor  function called
//all the arguments gets injected in this keyword
//ab miljaega hme