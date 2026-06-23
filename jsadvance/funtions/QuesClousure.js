//Closure Questions
//Q1
function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count);
    }

    return inner;
}

const fn = outer();
fn();//1
fn();//2
fn();//3

//Q2
function greet(name){
    return function(){
        console.log(`Hello ${name}`);
    }
}

const sayHii = greet("Navya");
sayHii();//Hello Navya


//Q3
function counter(){
    let value = 10;

    return function(){
        return value;
    };
}

const c = counter();
console.log(c());//10


//Q4
//Closure + State Management
function createCounter(){
    let count = 0;
    return{
        increment(){
            return ++count;
        },
        decrement(){
            return --count;
        },
        getValue(){
            return count;
        }
    }
}

const counters = createCounter();
console.log(counters.increment());//1
console.log(counters.increment());//2
console.log(counters.decrement());//1
console.log(counters.getValue());//1


//Q5
//Private Variable
function createBankAccount(balance){
    return{
        deposit(amount){
            balance += amount;
        },
        withdraw(amount){
            balance -= amount
        },
        getBal(){
            return balance;
        }
    }
}

const bank = createBankAccount(1000);
bank.deposit(500);
bank.withdraw(200);

console.log(bank.balance);


//Q6
//create Like button
function createLikeButton(){
    let likeCount = 0;
    return function(){
        console.log(++likeCount);
    }
}

const like = createLikeButton();

like();
like();
like();