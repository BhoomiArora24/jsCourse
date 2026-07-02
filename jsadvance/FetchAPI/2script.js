function createUser(){
    fetch('https://randomuser.me/api/')
    .then((rawData) => {return rawData.json()})
    .then((data) => {
        console.log(data);
        let maindiv = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.textContent = `${data.results[0].name.first}  ${data.results[0].name.last}`;
        h1.style.color = "white";
        document.body.appendChild(maindiv);
        maindiv.appendChild(h1);
    })
    .catch((err) => {console.log(err)})
}
createUser();