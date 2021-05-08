'use strict';   
import Game from './game.js';
import PopUp from './popup.js';

const gameHeader = new Game( Math.floor(Math.random() * 10+1));

finishGameBanner = new PopUp();

finishGameBanner.setClickListener(()=>{
    game.start();
});



