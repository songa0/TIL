const itemList = document.querySelector("#itemList");
const inputItem = document.querySelector("#inputItem");
const addBtn = document.querySelector("#addBtn");
let id = 0;

function onAdd(){
    if(inputItem.value==''){
        inputItem.focus();
        return;
    }

    const item = createItem();

    itemList.append(item);
    itemList.addEventListener("click", e=>{
        const id = e.target.dataset.id;
        if(e.target.nodeName==="I" && id){
            itemList.querySelector(`li[data-id='${id}']`).remove();
        }
    });
    item.scrollIntoView({block:'center'});

    inputItem.value = "";
    inputItem.focus();
}
function createItem(){
    const li = document.createElement('li');
    li.setAttribute('data-id', id);
    li.classList.add("liItem");
    li.innerHTML = `
            ${inputItem.value}
            <span><i class='fas fa-trash-alt' data-id = ${id}></i></span>
            <div class='liItem__devider'></div>` ;
    id++;

   return li;
}

addBtn.addEventListener("click",onAdd);

inputItem.addEventListener("keyup", e=>{
    if(e.keyCode == 13) onAdd();
});

