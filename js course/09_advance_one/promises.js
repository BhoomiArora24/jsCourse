//creating promises

const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //db calls, cryptography, network
    setTimeout(function(){
        console.log("ASYNC task complete")
        resolve()//calling resovle for connecting it to then
    }, 1000)
})

//consume promise
promiseOne.then(function(){// always done  after the task is done and resolve is called
    console.log("Promise consumed")
})

//again creating 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("ASYNC task complete")
        resolve()
    },1000)
}).then(function(){
    console.log("Promise consumed")
})

//3rd promise

const promiseThree = new Promise(function(resolve  , reject){
    setTimeout(function(){

        resolve({//mostly object is passed but can pass anything 
            usernname: "Navya", email: "navya.example.com"})
}, 1000)
})

promiseThree.then(function(user//hypothentically above object named user
){
    console.log(user)
})

//4th Promise

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){

        let error=true
        if(!error){
            resolve({//mostly object is passed but can pass anything 
                usernname: "Navya", email: "navya.example.com"})
        }
        else{
            reject("Something went wrong")
        }
    }, 2000)
})

const username = promiseFour.then((user)=>{
    console.log(user)
    return user.usernaame
})

console.log(username)