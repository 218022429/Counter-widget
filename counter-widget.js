const theNumber = document.querySelector(".theNumber");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");

decrementBtn.addEventListener('click', function(){
//    alert("-");
    if(myCounter > 0){

        myCounter--;
    theNumber.innerText = myCounter;
    }
    
});
let myCounter = 5;
theNumber.innerText = myCounter;

incrementBtn.addEventListener('click', function(){
// alert("+");
myCounter++;
theNumber.innerText = myCounter;
   
});