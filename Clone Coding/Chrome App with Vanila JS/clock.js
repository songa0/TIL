const clockContainer = document.querySelector(".js-clock"), 
      clockTitle = clockContainer.querySelector("span");
 


function getTime(){
    var date = new Date();
    var hours = changeTime(date.getHours());
    var minutes = changeTime(date.getMinutes());
    var seconds = changeTime(date.getSeconds());

    clockTitle.innerText = `${hours}:${minutes}`;
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