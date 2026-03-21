const coding=["js","cpp","py","ruby","java"]

// coding.forEach( function (item){
//     console.log(item)

// })

// coding.forEach((item)=>{
//     console.log(item)
// })

// function printAll(item ){
//     console.log(item);

// }
// // coding.forEach(printAll);


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)

// })

// for each
const mycoding=[
    {
        languageName:"javascript",
        languageFileName:"JS"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"cpp",
        languageFileName:"c++"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName)
    console.log(item.languageFileName)

})