const products = [
    {
        prodName: "Shorts",
        color: 
        [
            "pink",
            "black",
            "brown",
        ],
        size:
        [
            "xs",
            "s",
            "m",
        ],
        price: 579,
        stock: 6
    },
    {
        prodName: "Skorts",
        color: 
        [
            "pink",
            "black",
            "brown",
            "blue",
        ],
        size:
        [
            "xs",
            "s",
            "m",
            "l",
            "xl",
        ],
        price: 579,
        stock: 6
    },
    {
        prodName: "top",
        color: 
        [
            "pink",
            "black",
            "brown",
            "orange",
            "green",
        ],
        size:
        [
            "s",
            "m",
            "l",
            "xl",
        ],
        price: 579,
        stock: 6
    }
]


function Cart(){

    this.items= [];

    this.addItems = function(products){
        this.items.push(products);
    };
}

const shoppingCart = new Cart();