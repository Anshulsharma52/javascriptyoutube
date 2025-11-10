/*
const userEmail = "Anshu@gmil.cdi";

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}
*/
//falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
//true, 1, "0", 'false', " ", [], {}, function(){}


/*
//for object
const emptyobj = {};
if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
}
*/

/*
// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1= null ?? 10 ?? 20
console.log(val1);
*/

//Terniary Operator
// condition ? true : false

const iceTesPrice = 100
iceTesPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

