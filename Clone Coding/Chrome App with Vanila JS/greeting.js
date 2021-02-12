const greetDiv = document.querySelector(".js-greet"),
      form = greetDiv.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = greetDiv.querySelector(".js-greeting"),
      todoList = document.querySelector(".js-toDoForm");
 

const USER_LS = "currentUser",
      SHOWING_CN = "showing",
      HIDE_CN = "hide";

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

    greeting.classList.remove(HIDE_CN);
    greeting.classList.add(SHOWING_CN);

}

function loadName(){
    const currentName = localStorage.getItem(USER_LS);
    if(currentName=== null){
        askForName();

    }else{
        paintGreeting(currentName);
        todoList.classList.remove(HIDE_CN);
        todoList.classList.add(SHOWING_CN);
    }

}

function init(){
    loadName();

}

init();