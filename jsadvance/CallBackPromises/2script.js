//promise
//aap ek promise bnate ho jo ki do states me se ek state m ja skta h ya to resolve hoga ya reject hoga ab kya hoga that time will tell but hme dono k liye code likhna h

let pr = new Promise(function(resolve, reject){
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10);
        if(rn > 5){
            resolve(rn);
        }else reject(rn);
    },3000)// this promise will resolve after 3s now
})

//if resolved to .then()
//if reject to .catch()
//3 states: pending, fulfilled , rejected
//pending never handled
pr
.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
})



//async await
async function abcd(){
    try{
        let val = await pr//wait for pr until u get the full ans of pr
        console.log(val);
        console.log("Fulfilled")
    }
    catch(err){
        console.log(err);
        console.log("Rejected");
    }
}
abcd();