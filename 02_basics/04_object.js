// singleton
const tinderUser=new Object()
tinderUser.id="123a"
tinderUser.email="abc@google.com"

console.log(Object.keys(tinderUser))

// hasOwnProperty

// console.log(tinderUser)

const regularUser={
    email:"shivesh@google",
    fullname:{
        userName:{
            firstName:"shivesh",
            lastName:"kumar",
        }
    

    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userName)
// optional chaining
console.log(regularUser.fullname?.userName)


// combining
const obj1={
    1:"a",
    2:"b"

}
const obj2={
    3:"c",
    4:"d"

}
// const obj3={obj1,obj2}
// console.log(obj3);


// const obj4=Object.assign({},obj1,obj2)//{}-target object
// console.log(obj4);


const obj5={...obj1,...obj2}//spread operator
console.log(obj5);

// from data base
const user=[//array ke aander obj h
    {
        id:1,
        email:"@google.com"

    },
    {
        id:2,
        email:"@google.com"

    },
    {
        id:3,
        email:"@google.com"

    }
]


console.log(user[1].email);



// deconstruct of object
const course={
    courseName:"js in Hindi",
    price:"999",
    courseInstructure:"hitesh"

}
// const {which things}=from where
const {courseInstructure}=course;
console.log(courseInstructure);

// 