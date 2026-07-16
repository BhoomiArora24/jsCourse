//EVENT CAPTURING
//jab bhi app click krte ho ya koi bhi event raise krte ho to aapka jo event dlow h vo 2 phases m chalta h

//phase1: event from top to down
//phase2: event raised element se to top(parent) tk jaega

//first phase 1 works: hmesha phase 1 hi pehle hoti h but vo by default off hi rehti h , agar hm use on krde to pehle phase 1 ka ans milega
// turn on CAPTURE PHASE 
//first it checks ki capture phase on h agar nhi to bydefault phas2 chlega otherwise phase1 
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    alert("button clicked");
})

b.addEventListener("click", function(){
    alert("b clicked");
})

//this is how capture phase turned on just adding true
a.addEventListener("click", function(){
    alert("a clicked");
}, true)
c.addEventListener("click", function(){
    alert("c clicked");
}, true)
// as the capture phase is only on for a so it runs for a and c(capture the event listener of a first then c)then it continues event bubbling by listening to btn then bubbles to b
// so it works like a - c - btn - b