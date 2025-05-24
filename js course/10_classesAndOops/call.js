function SetUsername(username){
    this.username = username,
    console.log("called");
}
// okay so basically this refers to the this basically goes directly or refers to directly to the global execution thing so here when there is a function and there is and we are calling another function inside it so then like this example when set username gets run the function will will disappear and after getting run so now how will we use that function in the create user so basically we are using dot call here to make the function stay stay and even after that we are not able to see the username in there because this dot because here this is not because we have here we have to give this in the set username dot call this comma username so that we can refer to the username in the function set username okay


function createUser(username, email, password){
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);