'use strict';

export default class Field{
    constructor(leftCarrotNum, bugNum){
        this.gameField = document.querySelector('#game__field');
        this.IMG_WIDTH = 60;
        this.IMG_HEIGHT = 60;
        this.leftCarrotNum = leftCarrotNum;
        this.bugNum = bugNum;
        this.gameField.addEventListener('click', this.itemClickEvent);
    }

    addItem(className, cnt, srcPath){
        for(var i =1;i<=cnt; i++){
            var img = document.createElement('img');
            img.setAttribute('src',srcPath);
            img.setAttribute('id',className+i);
            img.setAttribute('class',className);
            img.style.left = Math.random() * (this.gameField.clientWidth-this.IMG_WIDTH)+'px';
            img.style.top = Math.random() * (this.gameField.clientHeight-this.IMG_HEIGHT)+'px';
            this.gameField.appendChild(img); 
        }
    }

    itemClickEvent(event){
        if(event.target.matches('.bug')){
            console.log(this.onItemClick);
            this.onItemClick && this.onItemClick('bug');
            
        }else if(event.target.matches('.carrot')){
            event.target.outerHTML='';    
            this.leftCarrotNum--;
            console.log(this.onItemClick);
            this.onItemClick && this.onItemClick('carrot');
        }
    }

    init(){
        this.addItem('carrot',this.leftCarrotNum,'img/carrot.png');
        this.addItem('bug',this.bugNum, 'img/bug.png');
    };

    setClickListener(onItemClick){
        this.onItemClick = onItemClick;
    }

}