/*
// singleton
//Object.create 

//Object literals

const mysym = Symbol("key1") //symbol declaration

const jsUser = {
    name: "Anshul",
    "full name": "Anshul sharma",
    [mysym]: "myname1",
    age: 20,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLogicDays: ["Monday","Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.full name) //ise ese nhi likha jaa skta
//console.log(jsUser["full name"]);
//console.log(jsUser[mysym]);


jsUser.email = "anshul@chatgpt.com"
//Object.freeze(jsUser); //freeze se kerne ke baad hm koi change nhi karte
//console.log(jsUser);


//function add
jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
// console.log(jsUser.greeting); //undefined
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

*/

//***************************video 2*****************/
/*
//const tinderUser = new Object()  //singleton object
const tinderUser = {} //non singleton object
tinderUser.id = "123abc"
tinderUser.name="sammy"
tinderUser.isLogggedIn = false
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Anshul",
            lastname: "sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

//combined objects
const obj1= {1:"a",2:"b"};
const obj2= {3:"c",4:"d"};
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "Abns@google.com"
    },
    {
        id: 1,
        email: "Abns@google.com"
    },
    {
        id: 1,
        email: "Abns@google.com"
    }
]
users[1].email
*/

/************De-structure video ********/
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructore: "hitesh"
}

// course.courseInstructore
const {courseInstructore: instructore} = course //destructure
console.log(instructore);

/********************API*********/
// {
//     "name":"Anshul",
//     "coursename": "js in hindi",
//     "price": "free"
// }
[
    {},
    {},
    {}
]