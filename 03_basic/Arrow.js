const user ={
    username : "kadival",
    price :999,

    welcomeMessage: function(){
        console.log(`${this.username} ,Welcome to Website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "said"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "said"
//     console.log(this.username);
    
// }
// chai()

// const chai = function (){
//    let username = "said"
//    console.log(this.username);
// }
// chai()

const chai = ()=>{
   let username = "said"
   console.log(this);
}

// chai()

// const addTwo= (num1,num2) => {
//     return num1+num2;
// }

// const addTwo= (num1,num2) => num1+num2;
// const addTwo= (num1,num2) => ( num1+num2 )

const addTwo = (num1,num2) => ({username: "said"})

console.log(addTwo(3,5));

// const myarr=[2,3,5,6]

// myarr.forEach()

