//OBSERVER PATTERN
class YoutubeChannel{
    constructor(){
        this.suscribers = [];//6- [{name: "harsh", update}] ,, similarly more will add into it
    }

    suscribe(user){
        this.suscribers.push(user);//2 -it is taking the suscribers array and pushing every new suscriber into it
        //5- now that user is getting pushed into the suscribers array
        //Now, see class User first
        user.update(`${user.name} has suscribed the channel`)
    }
    unsuscribe(user){
        this.suscribers = this.suscribers.filter((sub) => sub !== user);
        user.update(`You have un-suscribed the channel`)
    }
    notify(message){//7- so that the channel can send any mesg to his/her suscribers
        this.suscribers.forEach((sub) => sub.update(message))//8- why user.update here --- coz user ko kuch msg dene k liye u have to use user.update
    }
}

//3-
class User{
    constructor(name) {
        this.name = name;
    }
    update(data){//method in it-- so that agar user ko kuch bhii update dena ho to vo de ske juse like in suscribe method and more(in the class YoutubeChannel)
        console.log(`${this.name}, ${data}`);
    }
}

//1-
let sheriyans = new YoutubeChannel();//this will create a new blank object as we know through classes lecture, new will create a new empty object, it will have a field named suscribers (as we can see in Youtube channel class) which will consist elements in an array
//and will have various methods --suscribe, --unsuscribe, --notify
let user1 = new User("Harsh");//it is creating the object of user with the name as parameter required
let user2 = new User("Navya");

//4-
sheriyans.suscribe(user1);//Here, sheriyans ko suscribe kra h kon??? -- user1 ,,,, so, user kha ja ra h suscribe method ke pas(of the class youtube channel)
sheriyans.notify("New vedio uploaded");