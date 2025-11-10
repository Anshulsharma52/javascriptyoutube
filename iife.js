// Immediately Invoked Function Expressions(IIFE)
// first parenthisis use for function and second parenthisis use for execution
// Global scope ke pollution se problem hoti h toh jo global scope ke variables h uske pollution ko htane ke liye hm IIFE ka use karte h
//semicoloun lagana padega

(function chai(){
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);
}) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Anshul');