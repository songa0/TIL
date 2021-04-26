const timer = document.querySelector('#timer');
const randomNum  = Math.floor(Math.random() * 10+1); 
const carrotCnt = document.querySelector('#carrotCnt');
const startStopBtn = document.querySelector('#startStopBtn');
const section = document.querySelector('section');
const header = document.querySelector('header');
let startStopBtnFlag = true; //start
let timerSec = randomNum;
let leftCarrotNum = randomNum;
let bugNum = randomNum;
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
        img.id = 'carrot'+i;
        img.classList.add('carrot');
        img.src = 'img/carrot.png';
        img.style.left = Math.random() * (section.clientWidth-img.width)+'px';
        img.style.top = ((Math.random() * (section.clientHeight-img.height))+header.clientHeight)+'px';
        section.appendChild(img);

    }
};

function setBug(bugNum){
    for(var i = 0; i<bugNum; i++){
        var img = document.createElement('img');
        img.src = 'img/bug.png';
        img.id = 'bug'+i;
        img.classList.add('bug');
        img.style.left = Math.random() * (section.clientWidth-img.width)+'px';
        img.style.top = ((Math.random() * (section.clientHeight-img.height))+header.clientHeight)+'px';
        section.appendChild(img);

    }

};

section.addEventListener('click',itemClick);

function itemClick(event){
    console.dir(event.target.outerHTML);
   if(event.target.classList.contains("bug")){

   }else{ //carrot
        event.target.outerHTML = '';    
        leftCarrotNum--;
        carrotCnt.innerHTML = leftCarrotNum;
   }
};