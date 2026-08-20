// singleton object

//object literals
const mysym = Symbol("mykey");

const jsuser = {
    name: "said",
    Age : 18,
    loacation: "vadgam",
    [mysym]: "mykey", 
    email: "said@example.com",
    isloggedin: false,
    "full name": "said kadival",
    LastLoginDay: ["Monday", "Tuesday"]
}
// console.log(jsuser.name);
// console.log(jsuser.email);
// console.log(jsuser["email"]);
 
// console.log(jsuser["full name"]);

// console.log(typeof(jsuser[mysym]));


jsuser.email = "kadiva@jki.com";
console.log(jsuser);
// Object.freeze(jsuser)
jsuser.email = "maravan@345.com";
console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello jsuser");
}
console.log(jsuser.greeting());

jsuser.greetingtwo = function(){
    console.log(`hello jsuser ${this.name}`);
}
console.log(jsuser.greetingtwo());





 