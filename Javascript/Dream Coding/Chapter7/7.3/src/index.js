'use strict';   
import PopUp from './popup.js';
import Field from './field.js';
import * as sound from './sound.js';
import Game from './game.js';

const gameHeader = new Game();
const finishGameBanner = new PopUp();
const gameFieldSection = new Field(0,0);

timer.innerHTML = '0:0';
gameHeader.carrotCnt.innerHTML = 0;


finishGameBanner.setClickListener(()=>{
    gameStart();
});

gameFieldSection.setClickListener(onItemClick);

gameHeader.setClickListener(gameStartStop);
gameHeader.setStopTimeListner(gameStop);

function onItemClick(item){
   if(item==='bug'){
    sound.playBug();
     gameOver();
   }else if(item === 'carrot' ){ //carrot
        gameHeader.carrotCnt.innerHTML = gameFieldSection.leftCarrotNum;
        sound.playCarrot();
        if(gameFieldSection.leftCarrotNum==0){
            gameOver();
        }
   }
};

function gameStartStop(flag){
    if(flag==='stop'){
        gameStop();
    }else if(flag==='start'){
        gameStart();
    }
}
function init(){ //세팅
    gameHeader.randomNum  = Math.floor(Math.random() * 10+1);
    gameHeader.timerSec = gameHeader.randomNum;
    gameHeader.timerSec = gameHeader.randomNum;
    gameFieldSection.leftCarrotNum = gameHeader.randomNum;
    gameFieldSection.bugNum = gameHeader.randomNum;
    gameHeader.timer.innerHTML = `0:${gameHeader.timerSec}`;
    carrotCnt.innerHTML = gameFieldSection.leftCarrotNum;
    gameFieldSection.gameField.innerHTML = '';     
}

function gameOver(flag){ //게임 종료
    gameHeader.stopClock(); //시간 멈추기
    gameHeader.startStopBtnFlag = false;
    gameHeader.setStartStopBtn(gameHeader.startStopBtnFlag); //시작 버튼으로 바꾸기
    sound.stopBg();
    if(gameFieldSection.leftCarrotNum>0){ //게임 종료되었는데 남은 당근이 있을 시에 YOU LOST DIV 보여주기
        finishGameBanner.showPopup(true,'YOU LOSE');    
    }else {
        sound.playWin();
        finishGameBanner.showPopup(true,'YOU WIN');
    }
}

function gameStart(){ //게임 시작
    init(); //초기화
    gameHeader.startClock(); //시간초 
    gameHeader.startStopBtnFlag = true;
    gameHeader.setStartStopBtn(gameHeader.startStopBtnFlag); //정지 버튼으로 바꾸기
    gameFieldSection.init() //벌레, 당근 뿌리기
    finishGameBanner.showPopup(false);
    sound.playBg();
}

function gameStop(){
    gameHeader.stopClock(); //시간 멈추기
    finishGameBanner.showPopup(true,'REPLAY?');
    sound.stopBg();
}


