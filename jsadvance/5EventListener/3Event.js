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
