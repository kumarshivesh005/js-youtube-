// singleton
Object.create

// object literals

const mysym=Symbol("my key1")
const jsUser={
    key:"value",
    name:"lalan",
    // mysym:"my key",//here its type is symbol

    [mysym]:"my key symbol",//here it is used as symbol

    age:18,
    isLogineed:true,
    "full name":"lalan kumar"
};
// console.log(jsUser.name);//access by . key
// console.log(jsUser["name"]);//access of value by[""]
// console.log(jsUser["full name"]);
// console.log(typeof jsUser.mysym);
// console.log(typeof jsUser["mysym"]);

jsUser.age=55;//change decleared value
// console.log(jsUser)
// Object.freeze(jsUser);//it freeze the object then no change happen

jsUser.age=70;
// console.log(jsUser);


jsUser.greeting=function(){
    console.log(" hello ji from function");
}

jsUser.greetingTwo=function(){
    console.log(`hello ji my name is ${jsUser.name}`);
    
}

console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());




