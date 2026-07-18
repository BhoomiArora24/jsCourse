function setDarkOrLight(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    }
    else{
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
}

let btn = document.querySelector('#themeBtn');


if(localStorage.getItem("theme")){
    let theme = document.body.classList.add(localStorage.getItem("theme"))
    if(theme == "dark"){
        btn.textContent = "Dark Mode";
    }
    else{
        btn.textContent = "Light Mode";
    }
}else{
    setDarkOrLight();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(dets){
    setDarkOrLight();
})

btn.addEventListener('click', function(){
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        btn.textContent = "Light Mode";
        localStorage.setItem('theme', 'light');
    }
    else{
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        btn.textContent = "Dark Mode";
        localStorage.setItem('theme', 'dark');
    }
})

