let inp = document.querySelector(".inp");
let pp = document.querySelector(".pp");

inp.addEventListener("input", function(dets){
    pp.textContent= dets.target.value;
    pp.style.color="red"
})

let h2 = document.querySelector("h2");
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    h2.textContent++;
})



let para = document.querySelector(".para");
let button = document.querySelector(".btn");
button.addEventListener("click", function(){
    console.log("clicked");
    para.classList.toggle("hide");
    if(para.classList.contains("hide")){
        button.textContent="Show"
    }
    else{
        button.textContent="Hide"
    }
})


let pet= document.querySelector(".pet");
let text = document.querySelector("textarea");
text.addEventListener("input", function(dets){
    pet.textContent = `Character: ${dets.target.textLength}`
    if(dets.target.value === " "){
        pet.textContent = `Character: ${dets.target.textLength -1}`  
    }
})