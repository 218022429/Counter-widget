const counter = document.querySelector(
    ".counter" );
    const incrementBtn = document.querySelector(".increment");
    const decrementBtn = document.querySelector(".decrement");
    
    let Counter = 0;
    counter.innerText = Counter;
    
    incrementBtn.addEventListener('click', function(){
   
    Counter++;
    counter.innerText = Counter;});
    
    decrementBtn.addEventListener('click', function(){
  
        if(Counter > 0){
    
            Counter--;
        counter.innerText = Counter;
        }
});