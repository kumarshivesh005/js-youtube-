const user={
    userName:"Hitesh",
    price:"999",

    welcomeMessage:function(){
        console.log(`${this.userName} welcome to chai code`)
        console.log(this)

    }
}
// user.welcomeMessage()
// user.userName="shivesh"
// user.welcomeMessage()

// console.log(this)

function chai(){
    const username="shivesh"
    console.log(this)
    console.log(this.username)//undefined
}
// chai()

const chai1=function (){
    let username="shivesh"
    console.log(this)
    console.log(this.username)//undefined

}
// chai1()
const chaiArrow=()=>{
    let username="shivesh"
    console.log(this)
    console.log(this.username)//undefined

}
// chaiArrow()


// **** arrow function***
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(5,6))

// implect return
const addTwoN=(num1,num2)=>  num1+num2
console.log(addTwoN(5,5))

const addTwoNu=(num1,num2)=>  (num1+num2)
console.log(addTwoNu(5,4))

const myName=(num1,num2)=>  ({name:"Shivesh"})
console.log(myName(5,4))

