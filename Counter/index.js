const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const myCounter = document.getElementById("myCounter");
let count = 0;

increaseBtn.onclick = function(){
    count += 1;
    myCounter.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    myCounter.textContent = count;
}

decreaseBtn.onclick = function(){
    count -= 1;
    myCounter.textContent = count;
}


