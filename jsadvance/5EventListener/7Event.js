//Event Bubbling
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("button");

//event bubbling when we are clicking on button the listenner of its parents also works as it buubles to its parent no matter there is a listener already given to that particular element
btn.addEventListener("click", function(){
    alert("button clicked");
})

a.addEventListener("click", function(){
    alert("a clicked");
})

b.addEventListener("click", function(){
    alert("b clicked");
})