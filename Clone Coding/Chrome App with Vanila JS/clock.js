const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    var date = new Date();
    var hours = changeTime(date.getHours());
    var minutes = changeTime(date.getMinutes());
    var seconds = changeTime(date.getSeconds());

    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function changeTime(time){
    time = (time<10)? '0'+time : time;
    return time;
}
function init(){
    getTime();
    setInterval(getTime, 1000);
    
}

init();