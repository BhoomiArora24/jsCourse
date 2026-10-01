const arr = [1,2,3,4,5];

function myMap(arr, cb){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(cb(arr[i], i, arr));
    }
    return newArr;
}

// let ans = myMap([1,2,3,4], (num) => num + 2)
//map me jo bhi callback function dete ho use return krna zaruri 

//so how to actually call
//advance -- asli walin map function m value bhi ati h , arr, index sb ata h as param

myMap(arr, function(val){
    return val+2;
});