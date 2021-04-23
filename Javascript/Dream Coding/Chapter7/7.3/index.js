const timer = document.querySelector('#timer');
const randomNum  = Math.floor(Math.random() * 10); 
const carrotCnt = document.querySelector('#carrotCnt');
const startStopBtn = document.querySelector('#startStopBtn');
let startStopBtnFlag = true; //start
let timerSec = randomNum;
let leftCarrotNum = randomNum;
let intervalFunc;

timer.innerHTML = `0:${timerSec}`;
carrotCnt.innerHTML = leftCarrotNum;


function startClock(){
    intervalFunc = setInterval(() => {
        timerSec--;
        timer.innerHTML = `0:${timerSec}`;

        if(timerSec<=0) {
            
            stopClock();
        }
    }, 1000);

    
}

function stopClock(){
    clearInterval(intervalFunc);
}

//startClock();


startStopBtn.addEventListener('click',function(){
    if(startStopBtnFlag){
        startStopBtn.innerHTML = '<i class="fas fa-stop"></i>';
        startStopBtnFlag = false;
        startClock();
    }else{
        startStopBtn.innerHTML = '<i class="fas fa-play"></i>';
        startStopBtnFlag = true;
        stopClock();
        
    }
});



