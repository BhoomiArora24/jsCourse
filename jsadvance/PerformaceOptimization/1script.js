//debouncing- aap koi action kar rahe ho and aap ye nahi chahte har action pe kuch ho jab bhi mere action ke bich m koi specific gap aye to fir reaction perform

function debounce(){
    
}
document.querySelector("input")
.addEventListener("input", function(){
    console.log("heyyyyyyyyy");
})


//throttling
// Imagine scrolling Instagram.
// Scroll events fire
// hundreds of times.
// scroll
// Should Instagram calculate everything every millisecond?
// No.
// It updates
// once every few milliseconds.
// That's
// Throttling