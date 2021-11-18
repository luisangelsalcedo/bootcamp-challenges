'use strict';
class Reproductor {

    constructor(){
        this.playList = playListObj;
        this.audioObj = new Audio();
        
    }

    reproductorHandler(){
        document.getElementById('play').addEventListener('click', this.onPlay);

    }

    onPlay(){
        console.log('onPlay');
        console.log(this.playList[0]);
        this.audioObj.src = 'mp3/' + this.playList[0].src;
        this.audioObj.play(); 
    }

    init(){
        console.log(this.playList[0]);
        // this.onPlay()
        this.reproductorHandler()
    }
}

