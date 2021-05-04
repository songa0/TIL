const timer = document.querySelector('#timer');
const carrotCnt = document.querySelector('#carrotCnt');
const startStopBtn = document.querySelector('#startStopBtn');
const section = document.querySelector('section');
const header = document.querySelector('header');
let startStopBtnFlag = true; //start
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

function gameOver(){ //게임 종료
    stopClock(); //시간 멈추기
    setStartStopBtn(false); //시작 버튼으로 바꾸기
    if(leftCarrotNum>0){ //게임 종료되었는데 남은 당근이 있을 시에 YOU LOST DIV 보여주기
        showGameOverDiv();
    }else showGameFinished();
}

function gameStart(){ //게임 시작
    init(); //초기화
    startClock(); //시간초 시작
    setCarrot(leftCarrotNum); //당근 뿌리기
    setBug(leftCarrotNum); //벌레 뿌리기

}

startStopBtn.addEventListener('click',function(){
    setStartStopBtn(startStopBtnFlag);
    startStopBtnFlag?gameStart():gameOver();
    startStopBtnFlag = startStopBtnFlag?false:true;
});

function setStartStopBtn(flag){
    startStopBtn.innerHTML = flag?'<i class="fas fa-stop"></i>' :'<i class="fas fa-play"></i>';
     
}

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
   if(event.target.classList.contains("bug")){
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

function showGameOverDiv(){
    var redoDiv = document.createElement('div');
    redoDiv.id = 'redoDiv';
    redoDiv.innerHTML = '<i class="fas fa-redo-alt" id="redoBtn"></i><span>YOU LOST</span>'
    section.appendChild(redoDiv);
    redoDiv.addEventListener('click',()=>{
        section.removeChild(redoDiv);
        gameStart();
    });
    
};

function showGameFinished(){
    var redoDiv = document.createElement('div');
    redoDiv.id = 'redoDiv';
    redoDiv.innerHTML = '<i class="fas fa-redo-alt" id="redoBtn"></i><span>YOU WIN</span>'
    section.appendChild(redoDiv);
    redoDiv.addEventListener('click',()=>{
        section.removeChild(redoDiv);
        gameStart();
    });
    
};



