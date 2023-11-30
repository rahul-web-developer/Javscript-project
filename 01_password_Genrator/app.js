


let output = document.querySelector('#output');

// console.log(output)


let genratebtn = document.querySelector('#genrate');



let copybtn = document.querySelector('#copy');


let uppercase = document.querySelector('#uppercase')


let lowercase = document.querySelector("#lowercase");


let number = document.querySelector('#number');


let symbol = document.querySelector("#symbol");



let length = document.querySelector("#length");



let uprcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let lower = "abcdefghijklmnopqrstuvwxyz";

let numbers = "01234567890";

let symb = "~!@#$%^&*"



// length.innerText = "h"
const getRandomData = (dataset)=>{

    return dataset[Math.floor(Math.random()* dataset.length)]
}

 const Randompassword = (password = "")=>{
  
    if(uppercase.checked){
        password += getRandomData(uprcase);

    }

    if(lowercase.checked){
        password += getRandomData(lower);

    }

    if(symbol.checked){
        password += getRandomData(symb);

    }

    if(number.checked){
        password += getRandomData(numbers);

    }

    if(password.length < length.value){
        return Randompassword(password)
    }

    // console.log(output)
    output.value = password

    console.log(password)
}



Randompassword()

genratebtn.addEventListener('click',function(){
    Randompassword()

    
})



copybtn.addEventListener('click',()=>{
    if(output != "" || output.length >= 1 ){
        navigator.clipboard.writeText(output.value);

        copybtn.innerHTML = "check";
        copybtn.title = "Password copied";


        setTimeout(() => {
            copybtn.innerHTML = "copybtncon";
            copybtn.title = "";
    
        }, 2000);
    }
   

})











  
