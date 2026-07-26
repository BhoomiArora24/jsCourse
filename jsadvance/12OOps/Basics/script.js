//at the place of this a blank object created by new comes and stores the value in there
//classes me this ki value blank object hoti h jb hm use new word ke sath call krte h--studied in this key lec1


function CreateBiscuits(){
    this.name = "ParleG";
    this.price = 5;
    this.qty = 8;
    this.company = "Parle";
    this.category = "regular";
}

let biscuit1 = new CreateBiscuits();
//biscuit1 is an object filled with things that are there in createBiscuits


//humein seekhna h factories banaane, matlab ki aap ek bar blueprint bana do ki har object kaisa dikhega and hum log naye naye object with different values bna paenge, this is the sar of what oops does


function CreateBiscuits2(name, price, qty, company, category){
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.company = company;
    this.category = category;
}

let biscuit2 = new CreateBiscuits2("Oreo", 10, 5, "Cadbury", "Choclate");

let biscuit3 = new CreateBiscuits2("Fantasy", 20, 3, "Parle", "Choclate");

function CreatePencil(name, price, color){
    this.name = name, 
    this.price = price, 
    this.color = color
    let h1 = document.createElement("h1");
    h1.textContent = "Hey How are u??"
    h1.style.color = color;
    document.body.append(h1);
}

//agar tumhara constructor function koi field apne prototype pr attach karle to us constructor se banne waale sabhi new instances yaani ki object ke pas wo field automatically chali jati h

CreatePencil.prototype.company = "Sheriyans";//when some value is same for all objects no need to write it in constructor function as it takes extra space instead add it in the constructor functions prototype

//write is a method in obj
CreatePencil.prototype.write = function(text){
    console.log(this);
    let h1 = document.createElement("h1");
    h1.textContent = text;//pencil1.write("heyy"); text yha se uthana h
    h1.style.color = this.color;//in a method this refers to its obj
    document.body.append(h1);
}

//function that run though new are called --- constructor function--------
//constructor function ka pehla letter capital hona chahiye -good practice
let pencil1 = new CreatePencil("Natraj", 10, "black")
let pencil2 = new CreatePencil("DOMS", 15, "red")