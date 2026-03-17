let score="33acd";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33"=>33
// "33abc"=>NaN
// true=>1,false=>0

let isLoggedin=" ";
let booleanIsLoggedin=Boolean(isLoggedin);

console.log(booleanIsLoggedin);

// ""=>false
// " "=>true bcz of space
// 1=>true,0=>false

let someone=33
let conversationNumber=String(someone);
console.log(conversationNumber)
console.log(typeof conversationNumber)


// ******** operation *****
let value=3;
let negvalue=-value;
// console.log(negvalue);

// console.log(2+2)
// console.log(3-2)
// console.log(3*2)
// console.log(3**2)
// console.log(3/2)
// console.log(3%2)



console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)//122
console.log(1+2+"2")//32

console.log(true)
console.log(+true)//1
console.log(+"")//0

let num1,num2,num3
num1=num2=num3=4;