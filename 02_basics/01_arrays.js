// array starts from 0 based instruction
const myarr=[0,1,2,3,4,5];
// const newarray=new Array(1,2,3,4,5);
// shallow copy:copy that refer the same copy.
// deep copy:copy doesnot refer the same copy.

// array methods
// push
myarr.push(6)
myarr.push(7)
console.log(myarr);
myarr.pop()
console.log(myarr);

myarr.unshift(9);//add in first
console.log(myarr);

myarr.shift();//delete from first
console.log(myarr);


console.log(myarr.indexOf(9));
console.log(myarr.includes(9));

const newArray=myarr.join();
console.log(myarr)
console.log(myarr)

console.log(newArray)
console.log(newArray)

// slice vs splice
// # •••• slice •••
console.log("A ",myarr)
let myN1=myarr.slice(1,3);//start from 1 and goes 2,not include 3.[1,2]
console.log(myN1);
console.log("after slice B",myarr)
//# *** splice***

let myN2=myarr.splice(1,3);//start from 1 and goes 2 and 3.[1,2,3]
// splice original array se splice wala chunk pura nikal leta h
console.log(myN2);
console.log("after splice c:",myarr)

