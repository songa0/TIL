//sound
const carrotSound = new Audio('sound/carrot_pull.mp3');
const bugSound = new Audio('sound/bug_pull.mp3');
const winSound = new Audio('sound/game_win.mp3');
const alertSound = new Audio('sound/alert.wav');
const bgsound = new Audio('sound/bg.mp3');

export function playCarrot(){
    playSound(carrotSound);
}

export function playBug(){
    playSound(bugSound);
}

export function playWin(){
    playSound(winSound);
}

export function playAlert(){
    playSound(alertSound);
}

export function playBg(){
    playSound(bgsound);
}

export function stopBg(){
    stopSound(bgsound);
}

function playSound(sound){
    sound.play();
}

function stopSound(sound){
    sound.pause();
    sound.currentTime = 0;
}