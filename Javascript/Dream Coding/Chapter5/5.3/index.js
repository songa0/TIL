const itemList = document.querySelector("#itemList");
const inputItem = document.querySelector("#inputItem");
const addBtn = document.querySelector("#addBtn");

const addItemList = function(){
    let li = document.createElement("li");
        li.classList.add("liItem");
    let textNode = document.createTextNode(inputItem.value);
    let delBtn = document.createElement("span");
       
    let delTextNode = document.createTextNode("🗑");

    li.append(textNode);
    itemList.append(li);
    
    delBtn.append(delTextNode);
    li.append(delBtn);

    inputItem.value = "";
}

addBtn.addEventListener("click",addItemList);

inputItem.addEventListener("keyup", e=>{
    if(e.keyCode == 13) addItemList();
});


