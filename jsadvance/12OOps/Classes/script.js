class CreatePencil{
    constructor(name, company, price, color){//first thing that runs when we call it with ne keyword constructor runs
        //set default values, variable create-- it's work
        //define variables
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color
    }

    //create method
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }

    erase(){
        document.body.querySelectorAll("h1").forEach((elem) => {
            if(elem.style.color === this.color){
                elem.remove();
            }            
        })
    }
}

let p1 = new CreatePencil("natraj", "natraj", 10, "black");
let p2 = new CreatePencil("natraj", "natraj", 10, "blue");