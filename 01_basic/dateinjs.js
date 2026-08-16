/////****Date */

// let mydate = new Date();
// console.log(mydate.toString()); 
// console.log(mydate.toDateString());
// console.log(typeof mydate);
 
// // let mycreatedate = new Date(2026,7,16,2,20,10,500);
let mycreatedate = new Date("2026-08-16");
// console.log(mycreatedate.toString());
// console.log(mycreatedate.toLocaleTimeString());

// console.log(mycreatedate.toDateString());

let mytimestamp = Date.now();
// console.log(mytimestamp);
// console.log(mycreatedate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
// console.log(newdate);
// console.log(newdate.getMonth());
// console.log(newdate.getDay());


newdate.toLocaleString('default', {
     weekday: 'long',
     month: 'long',
     });
console.log(newdate.toLocaleString('default', {
         weekday: 'long',
         month: 'long',
         day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
     }));
     
