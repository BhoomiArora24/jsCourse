//Factory Function Pattern

//Ek function bnate ho jo objects create krta h (Factory = objects banane ki machine)


//Factory Function Pattern ek aisa design pattern hai jisme hum ek simple function likhte hai jo naye objects banakar return krta hai,bina class ya new keyboard use kiye

//is pattern ka main idea hai - object creation ko ek function ke through control krna

//har bar jub tum factory function call krte ho, tumhe ek nya object milta hai jisme apne methods aur (agar chaho to) private data ho skta h

//yeh pattern specifically useful hai jab tumhe ek hi type ke bahot sare objects chahiye, jaise users products, tasks etc


function createProduct(name, price){
    let stock = 10;
    return{//it will return an object
        name, 
        price, 
        checkStock(){
            console.log(stock);
        },
        buy(qty){
            if(qty <= stock){
                stock -= qty;
                console.log(`${qty} pieces booked - ${stock} pieces left`);
            }
            else{
                console.error(`Out of stock`)
            }
        },
        refill(qty){
            stock += qty;
            console.log(`stock refilled to ${stock}`);
        }
    }
}

let iphone = createProduct("iphone", 70000);//this will return an object which will be saved to the variable iphone

//everytime u run this createProduct will create a new object everytime with different prices and name

//this is usually done through classes and constructor function but here we're doing these without it through FACTORY FUNCTION PATTERN