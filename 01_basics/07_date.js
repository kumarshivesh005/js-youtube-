// date calculated from 1st jan 1970
let mydate=new Date();
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toJSON());
// toLocalString is used for customizing 
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toUTCString());
console.log(typeof mydate);

// month starts from 0 means(jan)
let myCreatedDate=new Date(2005,1,10);
console.log(myCreatedDate);
let myCreatedDate1=new Date(2005,0,10,5,2);
console.log(myCreatedDate1);
let myCreatedDate2=new Date(2005,1,10,10,45,55,54);
console.log(myCreatedDate2);
let myCreatedDate3=new Date("2025-01-10");
console.log(myCreatedDate3);
let myCreatedDate4=new Date("01-25-2026");
console.log(myCreatedDate4);



console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));//compare millisecond
