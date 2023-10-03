const mySym = Symbol("Hey Ashish")


const JsUser = {
    name: "Ashish",
    age: 21,
    [mySym]: "Ashish",
    location: "Noida",
    email: "kasaudhanak96@gmail.com",
    isloggedin: false,
    pastloggedin: ["Monday", "Tuesday", "Friday", "Saturday", "Sunday"]
}
// console.log(JsUser.pastloggedin);
// console.log(JsUser.email);
// console.log(JsUser.name);
// console.log(JsUser["name"])
// console.log(JsUser["age"])
// console.log(JsUser["location"])
// console.log(JsUser["email"])
// console.log(JsUser["isloggedin"])
// console.log(JsUser["pastloggedin"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

// Object.freeze(JsUser);
// JsUser.name = "Harsha";
// console.log(JsUser.name)
// JsUser.age = 343;
// console.log(JsUser.age)
// console.log(JsUser)
JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greeting2)
console.log(JsUser.greeting2())