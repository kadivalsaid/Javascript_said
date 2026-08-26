const userEmail = []

// if(userEmail)
// {
//     console.log("got user email");
// }
// else{
//     console.log("Don't user Email");
// }

// falsy values

// false, 0 ,-0, BigInt 0n, "" , null , undefined, NaN

// True values  (truthy valuers)

// "0" , 'false' , " " , [] , {} , function(){}

// if(userEmail.length ===0)
// {
//     console.log("Array is Empty");
    
// }

const empyobj = {}

if (Object.keys(empyobj).length === 0) {
    console.log("Object is empty");
    
}

// NUllish coalescing Operator(??): null undefined

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


console.log(val1);

//  Terniary Operator

// condition ? true : false

const ice = 100
ice <=80 ? console.log("less tha 80 "): console.log("more then 80");


