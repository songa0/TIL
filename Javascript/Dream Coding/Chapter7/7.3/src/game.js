'use strict';

export default class Game{
    constructor(){
        this.timer = document.querySelector('#timer');
        this.carrotCnt = document.querySelector('#carrotCnt');
        this.startStopBtn = document.querySelector('#startStopBtn');
        this.header = document.querySelector('header');

        this.startStopBtnFlag; //start
        this.timerSec = 0;
        this.intervalFunc;
        this.randomNum = 0;
        this.startStopBtn.addEventListener('click',(e)=>this.onBtnClick(e));

    }

    startClock(){ //카운트 다운 시작
        this.intervalFunc = setInterval(() => {
            this.timer.innerHTML = `0:${--this.timerSec}`;
            if(this.timerSec<=0) {  
                //stopgame
                this.stopTimeFunc&&this.stopTimeFunc();
            }
        }, 1000);
    }
    
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

}