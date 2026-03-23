// select form first 
const form=document.querySelector('.form')
form.addEventListener('submit',function(e){
    // stop default
    e.defaultPrevented();
})

// store height,weight and result in a variable
const height=parseInt(document.querySelector("#height").value);
const weight=parseInt(document.querySelector("#weight").value);
const result=document.querySelector("#results");

// if user enter weight and height in wrong way then result is not good
if(height===''||height<0||isNaN(height)){
    result.innerHTML=`please fill proper height in place of ${height}`;
}else if(weight ===''|| weight <0|| isNaN(weight )){
    result.innerHTML=`please fill proper weight in place of ${weight}`;
}else{
    const BMI=(weight/(height* height))*10000;
    result.innerHTML=`<span>${BMI}</span>`
}