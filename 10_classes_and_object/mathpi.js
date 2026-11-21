const descroptor = Object.getOwnPropertyDescriptor(Math, "PI")
//  descroptor.writable = true
// console.log(descroptor);


// console.log(Math.PI);
// Math.PI += 1
// console.log(Math.PI);

const chai = {
    name : 'kali chai',
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log("Chai Nahi Bani");
        
    }
}

const chaekpror = Object.getOwnPropertyDescriptor(chai , "name")
// console.log(chaekpror);
Object.defineProperty(chai , 'name',{
    // writable: false,
    enumerable: true
})
// // const chaekpror1 = Object.getOwnPropertyDescriptor(chai , "name")

// console.log(Object.getOwnPropertyDescriptor(chai , "name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value != 'function'){
       console.log(`${key}:${value}`);
    }
    
    
}