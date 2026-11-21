// ES6



// class User {
//     constructor(username,Email, password){
//         this.username= username;
//         this.Email = Email;
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeusername(){
//         return  `${this.username.toUpperCase()}`
//     }
    
// }

// const said = new User("said","said@gmail.com","said@123")

// console.log(said.encryptPassword());
// console.log(said.changeusername());

//behind the scene

function User(username,Email, password){
        this.username= username;
        this.Email = Email;
        this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}a1b4c`;
}
User.prototype.changeusername = function(){
    return  `${this.username.toUpperCase()}`
}

const tea = new User("tea","ta@gmail.com","tea@123")

console.log(tea.changeusername());
console.log(tea.encryptPassword());

