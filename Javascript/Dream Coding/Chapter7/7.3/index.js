const timer = document.querySelector('#timer');
const randomNum  = Math.floor(Math.random() * 10+1); 
const carrotCnt = document.querySelector('#carrotCnt');
const startStopBtn = document.querySelector('#startStopBtn');
const section = document.querySelector('section');
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
        setCarrot(leftCarrotNum);
        setBug(leftCarrotNum);
        startClock();
    }else{
        startStopBtn.innerHTML = '<i class="fas fa-play"></i>';
        startStopBtnFlag = true;
        stopClock();
        
    }
});

function setCarrot(carrotNum){
    for(var i = 0; i<carrotNum; i++){
        var img = document.createElement('img');
        img.src = 'img/carrot.png';
        img.left = '50px';
        img.top = '50px';
        section.appendChild(img);

    }
};

function setBug(carrotNum){

};
