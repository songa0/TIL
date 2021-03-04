function loadItems(){
    return fetch('../data/data.json')
    .then(response =>response.json())
    .then(json => json.items);

}

loadItems()
 .then(items =>{
     displayItems(items);
     setEventListeners(items);
 })
 .catch(console.log);


 function displayItems(items){
     const itemList = document.querySelector("#itemList");
     
     var listItem = '' ;
     for(var item of items){   
        listItem += `<li class = "${item.type} ${item.color}"><img src = ${item.image} >${item.gender}, ${item.size}</li>`;
     }
     itemList.innerHTML = listItem;
     
 }

 function setEventListeners(items){
    const header = document.querySelector('header');
    header.addEventListener('click', () => displayItems(items));
    
    
    const btnList = document.querySelector('nav ul');
    btnList.addEventListener('click',event =>clickEvent(event, document.querySelectorAll('section ul li')));

 }

 function clickEvent(event, items){
     const key = event.target.dataset.key;
     const value = event.target.dataset.value;
     
     for(var item of items){
        if(item.classList.contains(value)){
            item.classList.remove('invisible');
        }else{
            item.classList.add('invisible');
        }
     }
     
 }
