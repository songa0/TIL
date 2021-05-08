'use strict';

import Field from './field.js';
import * as sound from './sound.js';
import PopUp from './popup.js';

export default class Game{
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
        this.setClickListener(this.gameStartStop);

        this.finishGameBanner = new PopUp();
        this.finishGameBanner.setClickListener(()=>{
            this.start();
        });
        
    }

    startClock(){ //카운트 다운 시작
        this.intervalFunc = setInterval(() => {
            this.timer.innerHTML = `0:${--this.timerSec}`;
            if(this.timerSec<=0) {  
                this.stopTimeFunc&&this.stopTimeFunc();
            }
        }, 1000);
    }

    onItemClick = (item) =>{
        if(item==='bug'){
         sound.playBug();
         this.finish();
        }else if(item === 'carrot' ){ //carrot
             this.carrotCnt.innerHTML = this.gameFieldSection.leftCarrotNum;
             sound.playCarrot();
             if(this.gameFieldSection.leftCarrotNum==0){
                this.finish();
             }
        }
     };
    
    stopClock(){//카운트 다운 멈춤
        clearInterval(this.intervalFunc);
    }

    setClickListener(onItemClick){
        this.onItemClick = onItemClick;
    }
    
    setStartStopBtn(flag){
        this.startStopBtn.innerHTML = flag? '<i class="fas fa-stop"></i>':'<i class="fas fa-play"></i>';     
    }

    setStopTimeListner(stopTimeFunc){
        this.stopTimeFunc = stopTimeFunc;
    }
    onBtnClick(){
        this.setStartStopBtn(this.startStopBtnFlag);
        if(this.startStopBtnFlag){
            this.onItemClick && this.onItemClick('stop');
        }else{
            this.onItemClick && this.onItemClick('start');
        }
    }

    start(){ //게임 시작
        this.init(); //초기화
        this.startClock(); //시간초 
        this.startStopBtnFlag = true;
        this.setStartStopBtn(this.startStopBtnFlag); //정지 버튼으로 바꾸기
        this.gameFieldSection.init() //벌레, 당근 뿌리기
        this.finishGameBanner.showPopup(false);
        sound.playBg();
    }
    
    stop(){
        this.stopClock(); //시간 멈추기
        this.finishGameBanner.showPopup(true,'REPLAY?');
        sound.stopBg();
    }
    
    finish(){ //게임 종료
        this.stopClock(); //시간 멈추기
        this.startStopBtnFlag = false;
        this.setStartStopBtn(this.startStopBtnFlag); //시작 버튼으로 바꾸기
        sound.stopBg();
        if(this.gameFieldSection.leftCarrotNum>0){ //게임 종료되었는데 남은 당근이 있을 시에 YOU LOST DIV 보여주기
            this.finishGameBanner.showPopup(true,'YOU LOSE');    
        }else {
            sound.playWin();
            this.finishGameBanner.showPopup(true,'YOU WIN');
        }
    }

    gameStartStop =(flag) =>{
        if(flag==='stop'){
            this.stop();
        }else if(flag==='start'){
            this.start();
        }
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