//for loop
//initialization;condition check;inc./dec.
for (let i = 0; i < 10; i++) {
  const element = i;
  if(element == 6) {
    console.log("6 is best number")
  }
  console.log(element);
}

for (let i = 1; i <10; i++) {
  console.log(`Outer loop Value: ${i}`)
  for(let j =1; j < 10; j++){
    // console.log(`Inner loop Value: ${j} and inner loop ${i}`);
    console.log(`${i} * ${j} = ${i*j}`)
  }
}

let myArray = ["flash", "batman", "superman"];
//                                         agr ye nhi kiya to bar bar flash hi print hota rhega ctrl c krke rokna pdega coz it consumes memory  
for (let index = 0; index <myArray.length; index++){
  const element = myArray[index];
  console.log(element);
}

//break and continue

for (let index = 1; index < 20; index++) {
  if (index == 6) {
    console.log("6 Detected");
    break;//breaks the whole loop control flow pura bahar chla gya age kuch print nhi hua
  }
  console.log(`Value of i is ${index}`)
  
}

//continue
for (let index = 1; index < 20; index++) {
  if (index == 6) {
    console.log("6 Detected");
    continue;//ek bar k liye condition skip krdenge then continues running the loop
  }
  console.log(`Value of i is ${index}`)
  
}