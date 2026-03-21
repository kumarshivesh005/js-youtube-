// immediately invoked function expression

// normal function
function chai(){
    console.log(`db Connected`)
}
chai() 


// iffe;-immediately execute+global scope ke pollution se hatane ke liye karte h
(function chai1(){
    console.log(`db Connected`)
})();//semiccolumn is very important 


