//localStorage- apke browser ke andar data store krna jo ki browser band hone par bhi delete nahi hoga
//store kaise kre 
localStorage.setItem("name", "navya")
//data fetch kaise kre
let val = localStorage.getItem("name")
//remove kaise kre 
localStorage.removeItem("name");
//update kaise kre
localStorage.setItem("name", "navya")
localStorage.setItem("name", "navyaaa")//property nhi hogi to bnadega vrna update krdega
//glti se bhi string ke alwa kuch or store kiya to vo properly store nhi hogi as it will automatically become a string in lc as lc will only strone string
//solution
localStorage.clear();
localStorage.setItem("friends", JSON.stringify(["hey", "bye", "hello"]))
//then convert to parse
JSON.parse(localStorage.getItem("friends"));

//session storage- ye apka data temporarily store krta h mtlb tab bnd hua aur data gaya
sessionStorage.setItem("name", "navya");
let val2 = sessionStorage.getItem("name")
sessionStorage.removeItem("name")
sessionStorage.clear();

//cookies ye bhi data store krta hai and apka data browser ke cookies name ki property mein save hota hai and ye cookie concept kam data ya light data ke liye hota h
//4kb data store
//local, session- 5mb
//cookies me jo bhi store kroge vo data page reload pr automatically server pr jayega
document.cookie = "name=navya@gmail.com";