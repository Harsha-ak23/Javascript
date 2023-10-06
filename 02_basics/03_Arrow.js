// const user = {
//     name: "Ashish",
//     age: 21,
//     welcomeMessage: function(){
//         console.log(`${this.name}, welcome to website`);
//         // console.log(this)
//     }
// }

// // user.welcomeMessage();
// // user.name = "Harsha";
// // user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "Ashish"
//     console.log(this.username)
// }
// chai();

// const chai = function(){
//     let username = "Ashish"
//     console.log(this.username)
// }

// chai();

// const chai = () => {
//     let username = "Ashish"
//     console.log(this.username)
//     console.log(this)
// }

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(5,6));

const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(5,3));
