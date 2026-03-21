// for
for (let i = 1; i < 6; i++) {
    console.log(i)
    
}
for (let i = 0; i <= 10 ; i++) {
    console.log(`outer loop ${i}`)
    for (let j = 0; j <= 5; j++) {
        console.log(`inner loop ${j} and outer loop access ${i}`)
        
    }
   
    
}
for (let i = 1; i <= 10 ; i++) {
    console.log(`outer loop ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop ${j} and outer loop access ${i}`)
        // console.log(`${i}* ${j}=${i*j}`)
        
    }
   
    
}
const mysuperhero=["batman","ironman","superman"]
console.log(mysuperhero.length)
for (let index = 0; index < mysuperhero.length; index++) {
    const element = mysuperhero[index];
    console.log(element);
    
}


// break and continue
for (let index = 0; index < 10; index++) {
    if (index==5){
        console.log('detected 5')
        break;
    }
    console.log(index)
}
console.log("this is for continue")
for (let index = 0; index < 10; index++) {
    if (index==5){
        console.log('detected 5')
       continue;
    }
    console.log(index)
}