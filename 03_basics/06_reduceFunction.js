// =====>>>>*** reduce function basic syntax : 
//======>>>> **  array = [1,2,3.......];
//======>>>>> const initial = 0
//==========>>>>>> variable = array.reduce(callback-function(accumulator, currentvalue) =>  accumulator + currentvalue, initial);

const myNums = [1,2,3,4,5,6,7,8,9];

// const myTotal = myNums.reduce(function(acc, currvalue){
//     console.log(`accumulator: ${acc} and currentvalue: ${currvalue}`);
//     return acc + currvalue;
// }, 0)

// const myTot = myNums.reduce((acc,currval)=> (acc+currval),0)
const myTot = myNums.reduce((acc,currval)=> {
    // console.log(`accumulator: ${acc} and currentvalue: ${currval}`);
    // return (acc+currval)
},0);

// console.log(myTot);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const myTotalBill = shoppingCart.reduce((acc, currval) => (acc+currval.price),0);

console.log(myTotalBill);