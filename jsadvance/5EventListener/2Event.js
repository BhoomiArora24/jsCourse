//CHANGE
//change event tb chlta h jb apka koi input slect ya text area meing koi change hojae
let h3 = document.querySelector("h3");
let select = document.querySelector("select");
select.addEventListener("change", function(dets){
    console.log(dets.target.value);
    h3.textContent = `${dets.target.value} device selected`;
    h3.style.color="red";
})