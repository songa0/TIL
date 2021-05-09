'use strict';   
import { GameBuilder ,Reason} from './game.js';
import PopUp from './popup.js';
import * as sound from './sound.js';

const game = new GameBuilder()
.withRandomNum(Math.floor(Math.random() * 10+1))
.build();

const finishGameBanner = new PopUp();

finishGameBanner.setClickListener(()=>{
    game.start();
});

game.setGameStopListener((reason)=>{
    let showFlag, message;
    switch(reason){
        case Reason.STOP:
            showFlag = true;    
            message = "REPLAY?";
            break;
        case Reason.START:
            showFlag = false;
            message = '';
            break; 
        case Reason.LOSE:
            showFlag = true;
            message = 'YOU LOSE';
            sound.playAlert();
            break;
        case Reason.WIN:
            showFlag = true;
            message = 'YOU WIN';
            sound.playWin();
            break;
        default:
            throw new Error('not valid Reason');

    }
    finishGameBanner.showPopup(showFlag, message);
});

