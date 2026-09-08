// for loop

for (let i = 0; i <= 10; i++)
    {
    const element = i;
    if(element == 5){
    //     console.log("5 is found");
    }
   // console.log(element);
    }

    // console.log(element); // ReferenceError: element is not defined
    for (let i = 1; i <= 10; i++) {
    //    console.log(`OUTER loop value=${i}`);
      for (let j = 1; j <=10; j++) {
      //  console.log(`INNER loop value=${j} and OUTER loop value=${i}`);
        // console.log(i + '*' + j + ' = ' + (i * j));
      }
        
    }

    let myarray = ["flash" , "superman", "batman"]
// console.log("Length",myarray.length);
    for (let index = 0; index < myarray.length; index++) {
        // const element = myarray[index];
        // console.log(myarray[index]);
    }


// brack and continue

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("5 is found");
        break;
        
    }
    console.log(`value of i is ${i}`);
 
}

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("5 is found continue");
       continue;
        
    }
    console.log(`value of i is ${i}`);
 
}
