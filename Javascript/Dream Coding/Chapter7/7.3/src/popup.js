'use strict';

export default class PopUp{
    constructor(){
        this.popUp = document.querySelector('#redo__popup');
        this.popUpMsg = this.popUp.querySelector('span');
        this.popUp.addEventListener('click',()=>{
            this.onClick && this.onClick();
            this.showPopup(false);
        })
    }

    showPopup =(flag, text)=>{
        flag?this.popUp.classList.remove('popup__hide'): this.popUp.classList.add('popup__hide');
        this.popUpMsg.innerText = text?text:'';
    }

    setClickListener(onClick){
        this.onClick = onClick;
    }

}