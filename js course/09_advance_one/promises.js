//creating promises
//promise is an onbject

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

        let error=false
        if(!error){
            resolve({//mostly object is passed but can pass anything 
                username: "Navya", email: "navya.example.com"})
        }
        else{
            reject("Something went wrong")
        }
    }, 2000)
})

//fetch only gives reject when a work is not done but when  the error 404 arises it gives it in reponse only


    promiseFour
        .then((user)=>{
            console.log(user)
            return user.username
        }).then((username) => {//chaining upar ka return yha ayega

            console.log(username);
        }).catch(function(error){
            console.log(error);
        }).finally(() => console.log("The Promise is either resolve or rejected"))


    const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error=true;
        if(!error){
            resolve({//mostly object is passed but can pass anything 
                username: "Navya", email: "navya.example.com"})
        }
        else{
            reject("Something went wrong")
        }
    }, 2000)
    })

    async function consumePromiseFive(){
        try {
            const respone= await promiseFive;
            console.log(respone);
        } catch (error) {
            console.log(error);
        }
    }

    consumePromiseFive()

    // async function getAllUsers(){
    //     try {
    //         const response = fetch('https://api.github.com/users/hiteshchaudhary');
    //         const data = response.json();
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // getAllUsers()

    //fetch - method fetches a resource from a network
   
        fetch('https://api.github.com/users/hiteshchaudhary')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data); // resolving the data to pass to next .then
            })
            .catch(function(error) {
                console.log(error); // if fetch fails
            });
    