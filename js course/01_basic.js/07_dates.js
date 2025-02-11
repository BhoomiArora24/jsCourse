//DATES

let myDate = new Date();
console.log(myDate.toString());//output: Thu Dec 26 2024 17:12:04 GMT+0500 (West Kazakhstan Time)
console.log(myDate.toDateString());//output: Thu Dec 26 2024
console.log(myDate.toLocaleString());//output:26/12/2024, 5:12:04 pm 
console.log(typeof myDate);//output: obj

let myCreatedDate = new Date(2023, 0 , 23);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());

let my1CreatedDate = new Date("2023-01-14");
console.log(my1CreatedDate.toString());

let my2CreatedDate = new Date("01-14-2024");//in India this method is followed
console.log(my2CreatedDate.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(my2CreatedDate.getTime());
console.log(Date.now());//comes in millisecond
console.log(Math.floor(Date.now()/1000));

let newDate =new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
let newTime =Date.now();

console.log(`${newDate.getDay()} is the current date`);

newDate.toLocaleString('Default',{
  weekday: 'long',
})