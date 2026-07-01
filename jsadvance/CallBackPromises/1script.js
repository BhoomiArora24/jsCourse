//sync/async
//aisa code jo line by line chle -sync 
//aise code jo jb chlne ke liye ready hojae tb chle- async

function kuchDerBadChalunga(val){
    setTimeout( () => {
        console.log(val);
    }, 3000)
}

kuchDerBadChalunga(12);

//koi bhi code js m line by line chalega aur ye natural bhi hota h ki code line by line chale, but kabhi kabaar aise cases ate hai life mein jha par apka code wait krta hai and utni der m agla code chl jata h

console.log("A");
console.log("B");
setTimeout(() => {
    console.log("C");
}, 2000);
console.log("D");



//Callback
function profileLekarAo(username, cb){
    setTimeout(()=> {
        console.log(`profile fetech of ${username}`)
        cb({id: 12122, username})
    },2000)
}

function saarePostLekarAo(id, cb){
    setTimeout(()=> {
        cb({id: id, post:["hey", "hii", "hello"]})
    })
}
profileLekarAo("navya", function(data){//jb profile navya mil jaye to ye function chladena
    console.log(data);
    saarePostLekarAo(data.id, function(post){//jb id miljae to ye function chlao
        console.log(post);
    })
})