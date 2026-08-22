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
console.log(loginUserMessage("said"));
