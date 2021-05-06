'use strict';   
import PopUp from './popup.js';
import Field from './field.js';

const timer = document.querySelector('#timer');
const carrotCnt = document.querySelector('#carrotCnt');
const startStopBtn = document.querySelector('#startStopBtn');
const header = document.querySelector('header');

//sound
const carrotSound = new Audio('sound/carrot_pull.mp3');
const bugSound = new Audio('sound/bug_pull.mp3');
const winSound = new Audio('sound/game_win.mp3');
const alertSound = new Audio('sound/alert.wav');
const bgsound = new Audio('sound/bg.mp3');

let startStopBtnFlag; //start
let timerSec = 0;
let intervalFunc;
let randomNum;

const finishGameBanner = new PopUp();
let gameFieldSection = new Field(randomNum,randomNum);

timer.innerHTML = `0:${timerSec}`;
carrotCnt.innerHTML = gameFieldSection.leftCarrotNum;


finishGameBanner.setClickListener(()=>{
    gameStart();
});

gameFieldSection.setClickListener(()=>{
    onItemClick();
});

function onItemClick(item){
    console.dir(item);
   if(item==='bug'){
     playSound(bugSound);
     gameOver();
   }else if(item === 'carrot' ){ //carrot
        carrotCnt.innerHTML = gameFieldSection.leftCarrotNum;
        playSound(carrotSound);
        if(gameFieldSection.leftCarrotNum==0){
            gameOver();
        }
   }
};

function init(){ //세팅
    randomNum  = Math.floor(Math.random() * 10+1);
    timerSec = randomNum;
    timer.innerHTML = `0:${timerSec}`;
    carrotCnt.innerHTML = gameFieldSection.leftCarrotNum;
    gameFieldSection.gameField.innerHTML = ''; 
    
}

function startClock(){ //카운트 다운 시작
    intervalFunc = setInterval(() => {
        timer.innerHTML = `0:${--timerSec}`;
        if(timerSec<=0) {  
            gameOver();
        }
    }, 1000);

    
}

function stopClock(){//카운트 다운 멈춤
    clearInterval(intervalFunc);
}

function gameOver(flag){ //게임 종료
    stopClock(); //시간 멈추기
    startStopBtnFlag = false;
    setStartStopBtn(startStopBtnFlag); //시작 버튼으로 바꾸기
    stopSound(bgsound);
    if(gameFieldSection.leftCarrotNum>0){ //게임 종료되었는데 남은 당근이 있을 시에 YOU LOST DIV 보여주기
        finishGameBanner.showPopup(true,'YOU LOSE');
        
    }else {
        playSound(winSound);
        finishGameBanner.showPopup(true,'YOU WIN');
    }


}

function gameStart(){ //게임 시작
    init(); //초기화
    startClock(); //시간초 
    startStopBtnFlag = true;
    setStartStopBtn(startStopBtnFlag); //정지 버튼으로 바꾸기
    gameFieldSection.init() //벌레, 당근 뿌리기
    finishGameBanner.showPopup(false);
    playSound(bgsound);

}

function gameStop(){
    finishGameBanner.showPopup(true,'REPLAY?');
    stopSound(bgsound);
}

startStopBtn.addEventListener('click',function(){
    setStartStopBtn(startStopBtnFlag);  
    startStopBtnFlag?gameOver():gameStart();
});

function setStartStopBtn(flag){
    startStopBtn.innerHTML = flag? '<i class="fas fa-stop"></i>':'<i class="fas fa-play"></i>';     
}

function playSound(sound){
    sound.play();
}

function stopSound(sound){
    sound.pause();
    sound.currentTime = 0;
}