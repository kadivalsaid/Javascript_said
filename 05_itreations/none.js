const myNums = [1, 2, 3, 4]

// const mytital = myNums.reduce( function(acc, currval){
//     console.log(`acc ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const mytotyal = myNums.reduce( (acc , curr) => acc+curr ,0)

console.log(mytotyal);

const shoppingCard =[{
    itemname: "Js course",
    price : 2999
},
{
 itemname: "py course",
    price : 4999
},
{
 itemname: "data science course",
    price : 12999
    
},
]

const pricetppay = shoppingCard.reduce((acc,item) => acc+ item.price,0)
console.log(pricetppay);
