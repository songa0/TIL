'use strict';   
import Game from './game.js';
import PopUp from './popup.js';

const game = new Game( Math.floor(Math.random() * 10+1));

const finishGameBanner = new PopUp();

finishGameBanner.setClickListener(()=>{
    game.start();
});

game.setGamePopupListener(finishGameBanner.showPopup);

