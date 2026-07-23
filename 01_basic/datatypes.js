// primitive
//7 types:string, number, boolean, null, undefined, symbol, BigInt

//reference = non-primitive
//object, array, function

const id = Symbol("123");
const id2 = Symbol("123");
console.log(id===id2);

// const said= 12345678765432123456n;
// console.log(typeof said);
const hearos = ["spiderman", "ironman"];
const hero = {
    name: "said",
    age: 20,
};
// console.log(hero);
// console.log(hearos);
// console.log(typeof hero);
// console.log(typeof hero.age);
// console.log(typeof hearos);
const sayHello = function () {
    console.log("hello");
};
console.log(typeof sayHello);
//  console.log(sayHello());