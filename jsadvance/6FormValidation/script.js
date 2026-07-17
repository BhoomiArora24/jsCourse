let nm = document.querySelector('#name');
let form = document.querySelector('#form');

form.addEventListener('submit', function(dets){
    dets.preventDefault();
    let hide = document.querySelector('#hide');
    if(nm.value.length <= 2){
        hide.style.display = "initial";
    }
    else{
        hide.style.display = "none";
    }

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ans = regex.test("navya@gmail.com");
    console.log(ans);
})