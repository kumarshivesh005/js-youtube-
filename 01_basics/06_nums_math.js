let score=100;
console.log(score);

let newscore=new Number(200);
console.log(newscore);

console.log(newscore.toString())
console.log(typeof(newscore))
console.log(newscore.toFixed(2))

let value=123.4567;
console.log(value.toPrecision(5));

const hunderd=1000000;
console.log(hunderd.toLocaleString('en-In'))


// ********* Maths ********
console.log(Math)
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.abs(1/4));
// 4.51 to 4.59==5 ho jata h
console.log(Math.round(4.56));
console.log(Math.round(4.55));
console.log(Math.round(4.55));
console.log(Math.round(4.54));
console.log(Math.round(4.51));


console.log(Math.floor(4.567));// gives lowest value

console.log(Math.ceil(4.567));// give highest value

console.log(Math.random());//gives value between 0 to 1

console.log(Math.random()*10);//gives 1 to 9
console.log(Math.floor(Math.random()*10));//gives 0 to 9
console.log(Math.floor(Math.random()*10)+1);//gives 1 to 10

// we want digit b/w 10 to 20
let min=10;
let max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));//gives 10 to 20









