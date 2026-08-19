const marbel_hearos = ["superman", "batman", "hulk", "thor"];    
const dc = ["superman", "batman",  "flash"];
// marbel_hearos.push(dc);
// console.log(marbel_hearos);
// console.log(marbel_hearos[4][1]);

// const allhearos = marbel_hearos.concat(dc);
// console.log(marbel_hearos.concat(dc));

const allhearos = [...marbel_hearos, ...dc];//spead operator
console.log(allhearos);

const another_array = [1,3,3,[1,2,3,4,5], 4,[8,7,8,[9,0]]];

console.log(another_array.flat(Infinity));

console.log(Array.from("said"));
console.log(Array.from({Name: "said"}));//intresting way to create array from object

let Score1 = 100;
let Score2 = 200;
let Score3 = 300;

console.log(Array.of(Score1, Score2, Score3));
