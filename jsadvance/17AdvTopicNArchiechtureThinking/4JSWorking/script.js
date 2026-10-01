//call stack(Execution context)

//JS single threaded/synchronous - ek time pr ek hi kam krti h
//jab tum function call krte ho --> vo stack ke top pe chla jata h
//function completehone ke bad stack se nikal jata h(pop out ho jata h)

function a(){
    console.log(a);
}

function b(){
    a();
    console.log(b);
}

function c(){
    b();
    console.log(c);
}

c();
//now in here c lo chlaya c ne bola pehle b chlao
//b chlane gye to usne bola a cglao
//a pe gaye usne a pring kiya firm a pop out 
//a b ki wajah se chlaya tha to b chlayege fir b print hoga then pop out hojaega
//b c ki wAJAH se chla tha to c chlao user print kro and then pop out krdo
//this was all about call stack



//webApi's
//console.log, timeout, interval , prompt , alert
//ye sb js ka part ni h ye webqapis h
//so how it runs??
//ye feature browser deta h 
//so the features given by browser are called webAPI
//this is why webapis --node-- m ni chlti h coz its not the part of it to hm ye sb directly use nhi kr skte node m


//event loop
//synchronous and asynchronous are two types (know meaning)
setTimeout(() => {})//-async
//jo bhi chize webapi ke through chlte h and then jb bhi complete hoti h unhe hm dal dete h callback queue/task queue
// jo bhi chiz call stack m hoti h vhi chlti h to ab hmari web apis task queue m jati h after completion and then waits ki jb main/call stack khali hojae tb vo main stack m jaega nand then executes
//meand seTimeout - 5 sec ka bts chlega then -> taskQueue -> call stack
//it only goes to call stack when it gets empty to ab koi to hoga jo check krega ki call stack khali h k ni that is done by event loop and tranfers task from task to call