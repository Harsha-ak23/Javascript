// function addTwoNumber(number1, number2){
//     let result = number1 + number2;
//     return result
// }
// addTwoNumber(4,6);

function loginUserMessage(username){
    if(!username){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}

const userloggedIN = loginUserMessage();
console.log(userloggedIN);