/***********Array**************/

const arr = [ 0, 1, 2, 3, 4, 5]
const country = ['USA', 'Canada', 'Mexico', 'Germany', 'France']    


console.log(arr[1]);

//Array Methods

// arr.push(6);
// arr.push(7);
// arr.pop();

//add to the end of the array
// arr.unshift(9)
// arr.shift()
// console.log(arr.includes(5));
// console.log(arr.indexOf(5));

 const newarr = arr.join();
// console.log(arr);
// console.log(newarr);
// console.log(typeof(newarr));
// console.log(typeof(arr));

// slice , splice

console.log("A",arr);
const myarr = arr.slice(1,3)

console.log(myarr);
console.log("B",arr);

const myar = arr.splice(1,3)
console.log(myar);
console.log("S->",arr);






