const itemList = document.querySelector("#itemList");
const inputItem = document.querySelector("#inputItem");
const addBtn = document.querySelector("#addBtn");

function onAdd(){
    if(inputItem.value==''){
        inputItem.focus();
        return;
    }

    const item = createItem();

    itemList.append(item);

    item.scrollIntoView({block:'center'});

    inputItem.value = "";
    inputItem.focus();
}
function createItem(){
    const li = document.createElement('li');
    li.classList.add("liItem");

    const liDivider = document.createElement('div');
    liDivider.setAttribute('class','liItem__devider');

    let textNode = document.createTextNode(inputItem.value);
    
    let delBtn = document.createElement("span");
    delBtn.innerHTML= '<i class="fas fa-trash-alt"></i>';

    li.append(textNode);
    li.append(delBtn);
    li.append(liDivider);
   
    delBtn.addEventListener("click",()=>{
        itemList.removeChild(li);
    });

   return li;
}

addBtn.addEventListener("click",onAdd);

inputItem.addEventListener("keyup", e=>{
    if(e.keyCode == 13) onAdd();
});

