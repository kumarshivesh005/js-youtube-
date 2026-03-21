const username="S@google.com";

if(username){
    console.log("Got user ")
}else{
    console.log("user dont have account.")
}

// falsy values:
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truethy value:
true,"0",'false'," ",[],{},function(){}



// Nullish coalescing Operator (??):null undefined

let val1;
val1=5 ?? 10
console.log(val1);
val1=null ?? 10
console.log(val1);
val1=undefined ?? 10
console.log(val1);
val1=NaN ?? 10
console.log(val1);
val1=null ?? 10 ??20
console.log(val1);

// terneary operator
// condition ? true:false

const iceteaPrice=100;
iceteaPrice>=80 ?console.log("price more than 80"):console.log("price less than 80")
