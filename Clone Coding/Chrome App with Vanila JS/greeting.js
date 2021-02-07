const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);

}
function paintGreeting(text){
    greeting.innerText = `Hello ${text}`;
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
}

function loadName(){
    const currentName = localStorage.getItem(USER_LS);
    if(currentName=== null){
        askForName();

    }else{
        paintGreeting(currentName);
    }

}
function init(){
    loadName();

}

init();