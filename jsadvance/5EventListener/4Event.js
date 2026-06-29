let form = document.querySelector("form");
let input = document.querySelectorAll("input");

form.addEventListener("submit", function(dets){
    dets.preventDefault();//stops reloading stops submitting
    
    console.log(
        input[0].value,
        input[1].value,
        input[2].value,
        input[3].value,
    )
})