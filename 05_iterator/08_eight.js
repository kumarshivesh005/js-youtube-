// reduce
const mynums=[1,2,3]

// const mytotal=mynums.reduce(function(acc,currVal){
//     console.log(`acc value : ${acc} current value ${currVal}`)
//     return acc+currVal
// },0)//ye walla pahla value hota h
// console.log(mytotal);

const mytotal=mynums.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal);


const shoppingcart=[
    {
        itemname:"js course",
        price:2999,
    },
    {
        itemname:"dsa course",
        price:4999,
    },
    {
        itemname:"python course",
        price:8999,
    },
]

const myTotalCoursefee=shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(myTotalCoursefee)