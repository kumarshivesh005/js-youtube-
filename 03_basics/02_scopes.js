if(true){
    const a=10;
    let b=20;
    var c=30;
    
}

// console.log(a);
// console.log(b);
console.log(c);


// nested scope
function one(){
    const username="shivesh"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)

    two();
}
one()

// #****** intersting *****
console.log(addOne(5));

function addOne(num){
    return num+1;
}
console.log(addOne(5));


// console.log(addTwo(5));//not run bcz of store at a variable
const addTwo=function(num){
    return num+2

}
console.log(addTwo(5));