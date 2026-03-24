// select form first bcz i have submit buttom on the form.
const form=document.querySelector('form')
// this usecase give empty value so 
// const height=parseInt(document.querySelector("#height").value);//string se parse karne ke liye parseInt ka use karte h

form.addEventListener('submit',function(e){
    // stop default
    e.preventDefault();


// store height,weight and result in a variable
const height=parseInt(document.querySelector("#height").value);//string se parse karne ke liye parseInt ka use karte h
const weight=parseInt(document.querySelector("#weight").value);
const result=document.querySelector("#results");

// if user enter weight and height in wrong way then result is not good
if(height===''||height<0||isNaN(height)){
    result.innerHTML=`please fill proper height in place of ${height}`;
}else if(weight ===''|| weight <0|| isNaN(weight )){
    result.innerHTML=`please fill proper weight in place of ${weight}`;
}else{
    const BMI=(weight/((height* height)/10000)).toFixed(2);
    result.innerHTML=`<span>${BMI}</span>`
}
})