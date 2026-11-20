function setUsername(username){
    this.username = username
    console.log("called");
    
}

function createUser(username ,email , passwpord){
    setUsername.call(this ,username) 
    
    this.email = email
    this.passwpord = passwpord
}

const cjai = new createUser("cjai", "chai@fb.com","123")
console.log(cjai);
