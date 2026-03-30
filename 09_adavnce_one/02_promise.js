const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise1 is called");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("then is called.");
});

// write in a single
new Promise(function (resolve, rejest) {
  setTimeout(function () {
    console.log("promise2 is called.");
    resolve();
  }, 2000);
}).then(function () {
  console.log("hii from Shivesh");
});

// user details
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      name: "sachin",
      gmail: "sachin@nvidia.com",
    });
  }, 4000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ name: "shivesh ", password: "shiv123" });
    } else {
      reject("It is rejected.");
    }
  }, 5000);
});

// This is not executed without catch
promiseFour
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((user_name) => {
    console.log(user_name);
  })
  .catch((err) => {
    console.log(err);
  })
  // finally:-it always execute
  .finally(()=>{
    console.log("finally always runs.")
  });

  // async await
  const promiseFive=new Promise((resolve,request)=>{
    setTimeout(()=>{
      let error=false;
      if(!error){
        resolve({name:"js",email:"shivesh@xyz.js.com"})
      }else{
        console.log("error is here ");
      }

    },6000)
  })

  async function callfunctionFive() {
    try {
      const response =await promiseFive
      console.log(response);
      
    } catch (err) {
      console.log(err)
      
    }

    


    
  }
  callfunctionFive();


  // data from api
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{
    return response.json();

  })
  .then((data)=>{
    console.log(data);
  })
  .catch((error)=>{
    console.log("Error is",error)
  })
