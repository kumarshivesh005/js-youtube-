

function saymyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");

}
// saymyName()

function addTwoNumber(num1,num2){
    console.log( num1+num2);

}
addTwoNumber(3,4);
addTwoNumber(3,"4");
addTwoNumber(3,"a");
addTwoNumber(3,null);
addTwoNumber(3,undefined);

const result=addTwoNumber(3,5);
console.log(result);//undefined

function loginUser(username){
    return `you are loggedin ${username}`
}
console.log(loginUser("shivesh"));
console.log(loginUser());

// cart
function calculateCartPrices(num1){
    return num1

}
console.log(calculateCartPrices(50));
function calculateCartTotalPrices(...num1){//rest operator
    return num1

}
console.log(calculateCartTotalPrices(50,500,499,));

const user={
    username:"Hitesh",
    price:99

}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)

const myNewArray=[200,400,600,800]
function returnSecondValue(getArray){
    return getArray[1];

}
console.log(returnSecondValue(myNewArray))