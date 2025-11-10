//this kaa use current contests ko refer karne ke liye kiya jaata h
/*
const user = {
    username: "Anshul",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username ="Ansh"
// user.welcomeMessage()

console.log(this);
*/

// function chai(){
//     let username = "Anshul";
//     // console.log(this);
//     console.log(this.username);
// }
// chai();

// const chai = function(){
//     let username = "Anshul";
//     console.log(this.username);
// }

//+++++++++++++++++++Arrow functions++++++++++
// use for handing this keyword
// const chai = () => {
//     let username = "Anshul";
//     console.log(this.username);
// }
// chai();


// () => {}  //syntax
// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(3,4));

const addTwo = (num1,num2) => ( num1+num2 );
console.log(addTwo(3,4));

//object ke liye
const addTwo2 =  (num1,num2) => ({username:"Anshul"})
console.log(addTwo2(3,2));

const myArray = [1,2,3,4,5]

// myArray.forEach()