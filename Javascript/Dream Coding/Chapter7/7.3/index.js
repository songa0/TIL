'use strict';   

const timer = document.querySelector('#timer');
const carrotCnt = document.querySelector('#carrotCnt');
const startStopBtn = document.querySelector('#startStopBtn');
const section = document.querySelector('#game__field');
const header = document.querySelector('header');
const loseDiv = document.querySelector('#loseDiv');
const winDiv = document.querySelector('#winDiv');
const redo__popup = document.querySelector('#redo__popup');
const redo__popup__msg = redo__popup.querySelector('span');
const IMG_WIDTH = 60;
const IMG_HEIGHT = 60;
let startStopBtnFlag; //start
let bugFlag = false;
let timerSec = 0;
let leftCarrotNum = 0;
let bugNum = 0;
let intervalFunc;
let randomNum;
timer.innerHTML = `0:${timerSec}`;
carrotCnt.innerHTML = leftCarrotNum;

function init(){ //세팅
    randomNum  = Math.floor(Math.random() * 10+1);
    timerSec = randomNum;
    leftCarrotNum = randomNum;
    bugNum = randomNum;
    timer.innerHTML = `0:${timerSec}`;
    carrotCnt.innerHTML = leftCarrotNum;
    section.innerHTML = ''; 
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
    
    if(leftCarrotNum>0){ //게임 종료되었는데 남은 당근이 있을 시에 YOU LOST DIV 보여주기
        showPopup(true,'YOU LOSE');
    }else showPopup(true,'YOU WIN');
}

function gameStart(){ //게임 시작
    init(); //초기화
    startClock(); //시간초 
    startStopBtnFlag = true;
    setStartStopBtn(startStopBtnFlag); //정지 버튼으로 바꾸기
    setCarrot(leftCarrotNum); //당근 뿌리기
    setBug(leftCarrotNum); //벌레 뿌리기
    showPopup(false);

}

function gameStop(){
   showPopup(true,'REPLAY?');
}
startStopBtn.addEventListener('click',function(){
    setStartStopBtn(startStopBtnFlag);  
    startStopBtnFlag?gameOver():gameStart();
});

function setStartStopBtn(flag){
    startStopBtn.innerHTML = flag? '<i class="fas fa-stop"></i>':'<i class="fas fa-play"></i>';     
}

function setCarrot(carrotNum){
    addItem('carrot',carrotNum,'img/carrot.png');
};

function setBug(bugNum){
    addItem('bug',bugNum, 'img/bug.png');
};

function addItem(className, cnt, srcPath){
    for(var i =1;i<=cnt; i++){
        var img = document.createElement('img');
        img.setAttribute('src',srcPath);
        img.setAttribute('id',className+i);
        img.setAttribute('class',className);
        img.style.left = Math.random() * (section.clientWidth-IMG_WIDTH)+'px';
        img.style.top = Math.random() * (section.clientHeight-IMG_HEIGHT)+'px';
        section.appendChild(img); 
    }

}

section.addEventListener('click',itemClick);

function itemClick(event){
   if(event.target.classList.contains("bug")){
     bugFlag = true;
     gameOver();
   }else if(event.target.classList.contains("carrot")){ //carrot
        event.target.outerHTML = '';    
        leftCarrotNum--;
        carrotCnt.innerHTML = leftCarrotNum;
        if(leftCarrotNum==0){
            gameOver();
        }
   }
};

function showPopup(flag,text){
    flag?redo__popup.classList.remove('popup__hide'): redo__popup.classList.add('popup__hide');
    redo__popup__msg.innerText = text?text:'';
}

redo__popup.addEventListener('click',()=>{
    showPopup(false);
    gameStart();
});

