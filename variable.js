const accountId = 144553
let accountEmail = "anshu.sharma@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountstate; //undefined

//acoountId = 23 //not allowed
accountEmail="hafcbj@hc.com"
accountPassword="2345"
accountCity="Agra"
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])