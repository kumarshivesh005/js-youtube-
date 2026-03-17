console.log(null>0)
console.log(null==0)
console.log(null===0)//strictly compare
console.log(null>=0)//true
// bcz comperator operator(>,<,>=,<=)they firstly convert null into numder 0 then compare
// But equality operator works diff than coperator operator

console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)

const id=Symbol('123')
const newid=Symbol('123');
console.log(id)
console.log(newid)
console.log(id===newid);
