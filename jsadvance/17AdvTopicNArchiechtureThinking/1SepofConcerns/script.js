//DOM  ka codse and logic code alag rehna chahiye -- this is called seperation of concerns / Modularization

const btn = document.querySelector("button");
const ul = document.querySelector("ul");

// btn.addEventListener("click", function(){
//     const num1 =  Math.floor(Math.random()*10);
//     const num2 = Math.floor(Math.random()*10);
//     let add = num1 + num2;
//     let li = document.createElement("li");
//     li.textContent = add;
//     ul.appendChild(li);
// })
//working perfectly but the way is not good (dom logic everything is at the same place  )

//the correct way will be
function add(n1, n2){//LOGIC ALAG
    return n1+n2;
}

btn.addEventListener("click", //dom ka logic alag
    function(){
    const num1 =  Math.floor(Math.random()*10);
    const num2 = Math.floor(Math.random()*10);
    let finalAdd = add(num1, num2);
    let li = document.createElement("li");
    li.textContent = finalAdd;
    ul.appendChild(li);
})