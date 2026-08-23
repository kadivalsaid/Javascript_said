function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("i");
    console.log("d");
}
// sayMyName();

// function addTwoNumber(number1,number2){
//     console.log( number1 + number2);
// }
function addTwoNumber(number1,number2){
//   let  result = number1 + number2;
//   return result;
      return number1 + number2;
}
const result = addTwoNumber(2,4);

// console.log("Result:",result);

function loginUserMessage(username="kadival"){
    if(!username){
        console.log("Please enter a username");
      return;  
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("said"));
//console.log(loginUserMessage("said"));

function calculateCartPrice(val1,val2, ...num1){//rest operaters
    return num1;
}

console.log(calculateCartPrice(200,5000,200,800));
 
const user = {
    username: "kadival",
    price :1900
}
function handleObjewct(anyObject){
   console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
   
}
// handleObjewct(user);
handleObjewct({
    username: "said",
    price : 1800
});

const myNewArray = [200,30,500]

function seconndvaluer(getarray){
       return getarray[1];
}
// console.log(seconndvaluer(myNewArray));
// console.log(seconndvaluer([400,900,600]));

