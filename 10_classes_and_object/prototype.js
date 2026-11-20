// let myName = "Said    "
// let myChannel = "kadival   "


// console.log(myName.truelength);

let myHero = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getspiderPower : function (){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.said = function(){
    console.log(`said is present in alll object`);
    
}

Array.prototype.heySaid = function(){
    console.log(`said says hello`);
    
}
// myHero.said()

// heroPower.said()

// myHero.heySaid()
// heroPower.heySaid() /.not working

//inheritance

const user ={
    name : "said",
    Email : "said@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupprot = {
    makeAssingmnet : 'Js Assingment',
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ =  user

// MOdern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anoitherUsername = "saidAorCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
   
    
    console.log(`True length is : ${this.trim().length}`);
    
}

anoitherUsername.trueLength()

"said ".trueLength()
'iceTea'.trueLength()