const { use } = require("react");

const promiseOne = new Promise(function(resolve, reject){
    //DO an Asyn task
    // DB calls ,cryptograpy,network

    setTimeout(function(){
        console.log('Asyc task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
    
})


new Promise(function(resolve,reect){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolve");
    
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
   resolve({username: "said" , email: "said@gmain.com"})
    },1000)
   
})
promiseThree.then(function(user){
  console.log(user);
  
})


const promiseFore = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error)
        {
          resolve({Username:"said", password: "sai112"});
        }
        else
        {
            reject('Error somthin went wrog');
        }
    },1000)
})

 promiseFore.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
  console.log(username);
  
}).catch(function(erro){
    console.log(erro);
    
}).finally(()=>{
    console.log("TH promise is either ");
    
})

const promiseFive = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = true
        if(!error)
        {
          resolve({Username:"javascript", password: "112"});
        }
        else
        {
            reject('Error JS went wrog');
        }
    },1000)
})

async function consumePromiseFive(){
   try{
     const response = await promiseFive
    console.log(response);
   }
   catch(error)
   {
    console.log(error);
 
   }
    
}

consumePromiseFive()