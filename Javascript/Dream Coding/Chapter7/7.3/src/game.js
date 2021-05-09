'use strict';

import { Field,ItemType } from './field.js';
import * as sound from './sound.js';

//Type 보장하기
export const Reason = Object.freeze({
    STOP : 'STOP',
    START: 'START',
    LOSE: 'LOSE',
    WIN : 'WIN',
});

//Builder Pattern
export class GameBuilder{
    withRandomNum(randomNum){
        this.randomNum = randomNum;
        return this
    }

    build(){
        return new Game(
            this.randomNum
        )
    }
}


class Game{
    constructor(randomNum){
        this.timer = document.querySelector('#timer');
        this.carrotCnt = document.querySelector('#carrotCnt');
        this.startStopBtn = document.querySelector('#startStopBtn');
        this.header = document.querySelector('header');

        this.timer.innerHTML = '0:0';
        this.carrotCnt.innerHTML = 0;

        this.startStopBtnFlag; //start
        this.timerSec = 0;
        this.intervalFunc;
        this.randomNum = randomNum;
        this.startStopBtn.addEventListener('click',(e)=>this.onBtnClick(e));

        this.gameFieldSection = new Field(0,0);
        this.gameFieldSection.setClickListener(this.onItemClick);
        this.setStopTimeListner(this.stop);
        
    }

    startClock(){ //카운트 다운 시작
        this.intervalFunc = setInterval(() => {
            this.timer.innerHTML = `0:${--this.timerSec}`;
            if(this.timerSec<=0) {  
                this.stop(Reason.LOSE);       
            }
        }, 1000);
    }

    onItemClick = (item) =>{
        if(item===ItemType.bug){
         sound.playBug();
         this.stop(Reason.LOSE);
        }else if(item === ItemType.carrot ){ //carrot
             this.carrotCnt.innerHTML = this.gameFieldSection.leftCarrotNum;
             sound.playCarrot();
             if(this.gameFieldSection.leftCarrotNum==0){
                this.stop(Reason.WIN);
             }
        }
     };
    
    stopClock(){//카운트 다운 멈춤
        clearInterval(this.intervalFunc);
    }
   
    setStartStopBtn(flag){
        this.startStopBtn.innerHTML = flag? '<i class="fas fa-stop"></i>':'<i class="fas fa-play"></i>';     
    }

    setStopTimeListner(stopTimeFunc){
        this.stopTimeFunc = stopTimeFunc;
    }

    onBtnClick(){
        this.setStartStopBtn(this.startStopBtnFlag);
        this.startStopBtnFlag ? this.stop(Reason.STOP) : this.start();
        
    }

    start(){ //게임 시작
        this.init(); //초기화
        this.startClock(); //시간초 
        this.startStopBtnFlag = true;
        this.setStartStopBtn(this.startStopBtnFlag); //정지 버튼으로 바꾸기
        this.gameFieldSection.init() //벌레, 당근 뿌리기
        this.onGameStop&&this.onGameStop(Reason.START); //FALSE
        sound.playBg();
    }
    
    stop(reason){
        this.stopClock(); //시간 멈추기
        this.startStopBtnFlag = false;
        this.setStartStopBtn(this.startStopBtnFlag); //시작 버튼으로 바꾸기
        sound.stopBg();
        this.onGameStop && this.onGameStop(reason);
    }

    gameStartStop =(flag) =>{
        if(flag==='stop'){
            this.stop(Reason.START);
        }else if(flag==='start'){
            this.start();
        }
    }
    
    setGameStopListener(onGameStop){
        this.onGameStop = onGameStop;
    }
    
    init(){ //세팅
        this.timerSec = this.randomNum;
        this.timerSec = this.randomNum;
        this.gameFieldSection.leftCarrotNum = this.randomNum;
        this.gameFieldSection.bugNum = this.randomNum;
        this.timer.innerHTML = `0:${this.timerSec}`;
        this.carrotCnt.innerHTML = this.gameFieldSection.leftCarrotNum;
        this.gameFieldSection.gameField.innerHTML = '';     
    }
}