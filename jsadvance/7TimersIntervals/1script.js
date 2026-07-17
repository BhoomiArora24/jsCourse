let hoo = setTimeout(function(){
    console.log("hello")
}, 5000);

clearTimeout(hoo);

let hey = setInterval(function(){
    console.log("hello")
}, 5000);

clearInterval(hey);

let count = 10;

let interval = setInterval(function(){
    if(count >= 0){
        console.log(count);
        count--;
    }
    else{
        clearInterval(interval);
    }
}, 1000)