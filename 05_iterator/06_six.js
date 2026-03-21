// const coding=["js","java","py","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item)
//     return item;

// })
// console.log(values);




// filter returns the values but for each dont return value
// const mynums=[1,2,3,4,5,6,7,8,9,10]
//  let result=mynums.filter((num)=>num>5)

// console.log(result);

// when { then write   return }
const mynums=[1,2,3,4,5,6,7,8,9,10]
 let result=mynums.filter((num)=>{
    return num>5
})

console.log(result);


const books=[
    {
        title:"book-1",genre:" Fiction",publish:1983,edition:2004
    },
    {
        title:"book-2",genre:" Non-Fiction",publish:1986,edition:2025
    },
    {
        title:"book-3",genre:" History",publish:1999,edition:2024
    },
    {
        title:"book-4",genre:" History",publish:1969,edition:2024
    }
];

// const UserBooks=books.filter((bk)=> bk.genre===" History")
const UserBooks=books.filter((bk)=>{
    return (bk.genre===" History")

})
console.log(UserBooks)