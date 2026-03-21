// for of

// [" "," "]
// [{ },{ }]

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
    
}

const greeting="hello World!"
for(const greet of greeting){
    console.log(`Each char is ${greet}`)
};

// map-unique and remember the things in the same order
// iterable by for of only mainly it is not iterable
const map= new Map()
map.set('IN',"India")
map.set("fra","France")
map.set("NEP","Nepal")
console.log(map)

for(const [key,value] of map){
    console.log(key,"-",value)
}


// object is not iteratable
const myobj={
    game1:"nfs",
    game2:"spiderman"
}
for (const [key,value] of myobj) {
    console.log(key ,"-",value)
    
}