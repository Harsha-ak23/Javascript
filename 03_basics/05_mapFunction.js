// ** about map function()
// ** basic syntax ==>>  array.map(call back function)

const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNumber = myNumber.map((number) => {
//     return number + 10}
//     );

// console.log(newNumber);
const newNum = myNumber
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num > 40);

console.log(newNum);
