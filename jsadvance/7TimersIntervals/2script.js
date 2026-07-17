let count = 0;
let progress = document.querySelector('.progress');
let percentText = document.querySelector('#percent');
let status = document.querySelector('#status');

let project = setInterval(function(){
    if(count <= 99){
        count++;
        progress.style.width = `${count}%`;
    }
    else{
        percentText.textContent = `${count}%`;
        clearInterval(project);
    }
    if(count === 100){
        status.textContent = `Download Complete`;
    }
}, 30)