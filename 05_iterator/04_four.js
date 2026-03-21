// obj is iterable by for in loop
const myobj={
    js:"javaScript",
    cpp:"c++",
    swift:"swift by apple"
}
for(const key in myobj){
    console.log(key);//value deta h

}

const programming=["js","cpp","java","py"]
for (const key in programming) {
    console.log(key);//sirf key deta h ie{0,1,2,3,4}
    
}
for (const key in programming) {
    console.log(programming[key]);//yeh value dega
    
}
