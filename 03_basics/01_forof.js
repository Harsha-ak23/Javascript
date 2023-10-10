// for of loop

// const arr = [1,3,4,6,7,8,]

// for(const num of arr){
//     console.log(num);
// }

// const greeting = "Hello! World"
// for(const greet of greeting){
//     if(greet === " "){
//         continue;
//     }
//     console.log(`Each char is ${greet}`);
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France");

// console.log(map)

// for(const key of map){
//     console.log(key);
// }

for(const [key, value] of map){
    console.log(key, ':-', value);
}