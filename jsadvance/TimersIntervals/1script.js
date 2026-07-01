let tm = setTimeout(function(){
    console.log("hello")
}, 5000)//ek bar chlta h

clearTimeout(tm);//for clearing setTimeout needs to be saved in a variable

let ab = setInterval(function(){
    console.log("hello")
}, 5000)//bar bar chlta h 

clearInterval(ab);

let count = 10;
let interval = setInterval(function(){
    if(count >= 0){
        count --;
        console.log(count);
    }
    else{
        clearInterval(interval);
    }
}, 1000)