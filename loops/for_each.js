//const coding = ["js","ruby","java","py","cpp"]
// coding.forEach( function (item) {
//     console.log(item);
// } )


// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


// const myCoding = [
//     {
//         languageName : "javascript",
//         languageFileName : "js"
//     },
//     {
//         languageName : "java",
//         languageFileName : "java"
//     },
//     {
//         languageName : "python",
//         languageFileName : "py"
//     }
// ]
// myCoding.forEach( (item) => {
//     console.log(item);
    
// } )

//esa nhi hoga
// const coding = ["js","ruby","java","py","cpp"]
// const values = coding.forEach( function (item) {
//     console.log(item);
//     return item;
// } )
// console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums);

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = []
// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num);
//     }
// } )
// console.log(newNums);


// reduce function+++++++++++++++++++++


// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);


// const myNums = [1,2,3]
// const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "py course",
        price: 999
    },
    {
        itemName : "Mobile dec course",
        price: 5999
    },
    {
        itemName : "data science course",
        price: 12999
    }
]
const priceToPay = shoppingCart.reduce( (acc,item) => acc+item.price,0)
console.log(priceToPay);
