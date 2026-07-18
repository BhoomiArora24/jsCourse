let form = document.querySelector('.form')

form.addEventListener('submit', function(dets){
    dets.preventDefault();
    let popup = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.style.color = "white";
    h2.style.backgroundColor = "green";
    h2.style.padding = "10px";
    h2.textContent = "Form Submitted";
    h2.style.textAlign = "center";
    popup.appendChild(h2);
    form.appendChild(popup);

    setTimeout(function(){
        popup.style.display = "none";
    }, 3000);
})