const toDoform = document.querySelector(".js-toDoForm"),
      toDoInput = toDoform.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
const toDos = [];

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);

    toDoList.appendChild(li);
}

function saveInArr(text){
    const obj = {
        text: text,
        id : toDos.length+1
    };
    toDos.push(obj);

}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    saveInArr(currentValue);
    toDoInput.value = "";
}

function loadTodos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos!==null){

    }
}
function init(){
    loadTodos();
    toDoform.addEventListener("submit",handleSubmit);
}

init();