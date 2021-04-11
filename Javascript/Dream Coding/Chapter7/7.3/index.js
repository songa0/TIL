const timer = document.querySelector('#timer');
const randomNum  = Math.floor(Math.random() * 10); 
const carrotCnt = document.querySelector('#carrotCnt');
let timerSec = randomNum;
let leftCarrotNum = randomNum;
let intervalFunc;

timer.innerHTML = `0:${timerSec}`;
carrotCnt.innerHTML = leftCarrotNum;


function startClock(){
    intervalFunc = setInterval(() => {
        timerSec--;
        timer.innerHTML = `0:${timerSec}`;

        if(timerSec<=0) stopClock();
    }, 1000);

    
}

function stopClock(){
    clearInterval(intervalFunc);
}

startClock();



