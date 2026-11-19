const { use } = require("react");

const user = {
    username : "said",
    Logincount : 8,
    signedIn : true,
    getUserDeteails : function(){
        // console.log('Got user details from database');
        //console.log(`Username: ${this.username}`);
        console.log(this);
        
  
    }
}

// console.log(user.getUserDeteails());
// console.log(this);


// const promiseOne = new Promise();
// const date = new Date()

function User(username, logincount , isLoggedIn)
{
  this.username = username;
  this.logincount = logincount;
  this.isLoggedIn = isLoggedIn

  this.greeting = function (){
    console.log(`welcome ${this.username}`);
    
  }
//   return this
}

const userOne = new User("said",12,true)
const usertwo = new User("ChaiAurCode",11,false)
console.log(userOne.constructor);
