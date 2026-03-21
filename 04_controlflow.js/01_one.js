// if
isUserLoggedIn=true

// ===;also check type

if(isUserLoggedIn){


}else{

}

// const score=200;
// if(score>100){
//     const power="fly";
//     console.log(`user power ${power}`)
    
// }
// console.log(`user power ${power}`)
const score=200;
if(score>100){
    var power="fly";
    // console.log(`user power ${power}`)
    
}
// console.log(`user power ${power}`)//after var this line run easily

const balance=1000;
if (balance<500){
    console.log("less that 500")

}else if(balance<750){
    console.log("less than 750")
}else if(balance<900){
    console.log("balance less than 900")
}
else{
    console.log("balance is more than 900");
}





const userLoggedin=true
const debtCard=true

if(userLoggedin && debtCard){
    console.log("allowed to buy course")
}