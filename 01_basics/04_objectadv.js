const tinderUser = new Object()
tinderUser.name = "Ashish";
tinderUser.id = "123abc";
tinderUser.isloggedIn = false;
// console.log(tinderUser)
// const regularUser = {
//     email: "kasaudhanak@gmail.com",
//     fullname:{
//         username:{
//             firstname: "Harsh",
//             lastname: "Kasaudhan"
//         }
//     }
// }
// console.log(regularUser.fullname.username.firstname);
// const obj1 = {1:"a", 2:"b"};
// const obj2 = {3:"c", 4:"d"};
// const obj4 = {5:"e", 6:"f"}
// console.log(obj1)
// const obj3 = {obj1, obj2, obj4}
// const obj3 = Object.assign({},obj1, obj2, obj4);
// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)
// console.log(obj1)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isloggedIn'));
// console.log(tinderUser.hasOwnProperty('islogged'));

const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"Ashish"
}

// const {courseInstructor} = course
// console.log(courseInstructor);
// console.log(course);
const {courseInstructor:instructor} = course
console.log(instructor);