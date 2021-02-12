const toDoform = document.querySelector(".js-toDoForm"),
      toDoInput = toDoform.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerText = text;

    const newId = toDos.length+1;
    li.id = newId;
    
    li.appendChild(delBtn);
    li.appendChild(span);

    toDoList.appendChild(li);

    const obj = {
        text: text,
        id : toDos.length+1
    };
    toDos.push(obj);
    saveTodos();

    delBtn.addEventListener("click",deleteTodo);
}

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    
    toDoList.removeChild(li);
    
    const cleanTodos = toDos.filter(function(todo){
         return todo.id != li.id;
    });

    toDos = cleanTodos;
    saveTodos();
}

function saveTodos(text){
    
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));

}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    saveTodos(currentValue);
    toDoInput.value = "";
}

function loadTodos(){
    const loadedToDos = JSON.parse(localStorage.getItem(TODOS_LS));
    
    if(loadedToDos!==null){
        loadedToDos.forEach(function(toDo){
            paintTodo(toDo.text);
        });
    }
}
function init(){
    loadTodos();
    toDoform.addEventListener("submit",handleSubmit);
}

init();