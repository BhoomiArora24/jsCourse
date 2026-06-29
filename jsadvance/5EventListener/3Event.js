//whatever we type it should come on the screen directly

//approach
//we call window to a screen
//so we'll use window instead of document
let h1 = document.querySelector("h1");
window.addEventListener("keydown", function(dets){console.log(dets.key);
    // h1.textContent= dets.key; nowspace becomes issue here
    if(dets.key === " "){
        h1.textContent="SPC";
    }else{
        h1.textContent= dets.key;
    }
})







//-------------
let div = document.querySelector("#btn")
let inp = document.querySelector("input")

div.addEventListener("click", function(){
    inp.click();//through js when we'll click on div js will automatically raise an event and click to input
})

inp.addEventListener("change", function(dets){
    const file = dets.target?.files[0]?.name;
    if(file){
        div.textContent = dets.target?.files[0]?.name;
    }
    // div.classList.add("btn");
})