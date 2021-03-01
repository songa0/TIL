function loadItems(){
    return fetch('../data/data.json')
    .then(response =>response.json())
    .then(json => json.items);

}

loadItems()
 .then(items =>{
     displayItems(items);
 })
 .catch(console.log);


 function displayItems(items){
     const itemList = document.querySelector("#itemList");
    for(var item of items){   
        var li = document.createElement('li');
        var img = document.createElement('img');
        img.src = item.image;
        var txt = document.createTextNode(`${item.gender}, ${item.size}`);
        li.appendChild(img);
        li.appendChild(txt);
        itemList.appendChild(li);
    }
        
    
 }