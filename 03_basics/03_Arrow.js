const user = {
    name: "Ashish",
    age: 21,
    welcomeMessage: function(){
        console.log(`${user.name}, welcome to website`);
    }
}

user.welcomeMessage();
user.name = "Harsha";
user.welcomeMessage();