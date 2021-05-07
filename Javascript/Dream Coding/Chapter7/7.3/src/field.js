'use strict';

export default class Field{
    constructor(leftCarrotNum, bugNum){
        this.gameField = document.querySelector('#game__field');
        this.IMG_WIDTH = 60;
        this.IMG_HEIGHT = 60;
        this.leftCarrotNum = leftCarrotNum;
        this.bugNum = bugNum;
        this.gameField.addEventListener('click',(e)=>this.itemClickEvent(e)); //여기서 this 바인딩 관련 이슈 있었음. 
        /*this 바인딩 방법
          this.itemClickEvent = this.itemClickEvent.bind(this)
          arrow 함수 
           - 위에서 사용한 방법
           - itemClickEvent 정의할 때, itemClickEvent = event => 로 정의하여 event를 멤버변수로 만들기
           */ 
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
            this.onItemClick && this.onItemClick('bug');
        }else if(event.target.matches('.carrot')){
            event.target.outerHTML='';    
            this.leftCarrotNum--;
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