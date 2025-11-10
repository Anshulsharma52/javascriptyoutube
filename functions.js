function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}
//sayMyName()
/* jb function ko call karate hai toh jo number hm dete h unhe bolte h arguments or function ke ander jo number diye jaate h unhe parameters bolte h*/

// 1)
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumbers(3,4)

// 2)
// function addTwoNumbers(num1,num2){
//     // let result = num1+num2;
//     // return result;
//     return num1+num2;
// }
// const result = addTwoNumbers(3,5);
// console.log("Result: ",result);

// 3)
// function loginUerMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUerMessage("Anshul"));

//ek se jayada value ko array me daalna
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500));


//for Objects
// const user = {
//     username: "Anshul",
//     price:199
// }
// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
// }
// handleObject(user);

//for Array
const myArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray));
