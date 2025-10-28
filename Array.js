const myArr = [0,1,2,3,4,5];
//console.log(myArr);

// const myHeros = ["ansdb","asdf"]

// const myArr2 = new Array(1,2,3)
// console.log(myArr2)

//Array methods
// myArr.push(6)  // ye last me add hota h
// myArr.pop();  // ye last se delete kerta h

//myArr.unshift(9);  // ye starting me add hota h
//myArr.shift(); // ye starting se delete kerta h

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  // ****************iske use se bracket ht jaata hai mtlb iska type change ho jaata h Array to string************************************************
// console.log(myArr);
// console.log(newArr);


//slice,splice
//*********slice- iska use array me se ek range me element nikalne ke liye kiya jaata hai jese 1,3 index toh 1 se leker 3 tk saare element aa jaayenege lekin 3 include nhi hota 
// splice = iska use ek range ke element ko array me se htane kaa kaam krta hai jese 1,3 index ke saare element main array me se ht jaayenge*/
// console.log("A ",myArr);

// const myn1 = myArr.slice(1,3);

// console.log(myn1);
// console.log("B ",myArr);

// const myn2 = myArr.splice(1,3);
// console.log(myn2);
// console.log("c ",myArr);

/***************************Second video start********* */

const heros = ["thor","Ironman","spiderman"]
const dc = ["superman","flash","spiderman"]

// heros.push(dc)  // isse Array ke ander Array pahunch jaata h
// console.log(heros);
// console.log(heros[3][1]);

// const allheros = heros.concat(dc); //isse dono Array merge ho jaate h
// console.log(allheros);

// const all_new = [...heros, ...dc]; //isse bhi dono array merge ho jaate h
// console.log(all_new);


/* isse apna array sahi ho jaayega */
// const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_arr = another_arr.flat(Infinity);
// console.log(real_arr);


// console.log(Array.isArray("Anshul")); //ye btata h Array hai ki nhi 
// console.log(Array.from("Anshul")); // ye Array bna deta h
// console.log(Array.from({name: "Anshul"})); //interesting

let score1 = 80
let score2 = 90
let score3 = 100

console.log(Array.of(score1,score2,score3));

