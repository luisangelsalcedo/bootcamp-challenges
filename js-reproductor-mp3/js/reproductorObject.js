'use strict';
const ReproductorObj = {
    tipo: '3) Usando un objeto',
    audioObj : new Audio(),
    playList : playListObj,
    reproductor : document.querySelector('main'),
    playListBox : document.querySelector('.playlist'),
    path : 'mp3/',
    track : null,
    positionPlayList : 0,
    

    reproductorHandler: function(){

        const btnPlay = document.getElementById('play');
        const btnPause = document.getElementById('pause');

        btnPlay.addEventListener('click', ()=>{
            this.onPlay();
        });
        btnPause.addEventListener('click', ()=>{
            this.onPause();
        });

        this.track = this.playList[this.positionPlayList]; // guardar referencia del mp3 en reproducción
        this.loadTrack();

    },

    loadTrack: function(){
        this.audioObj.src = this.path + this.track.src; // cargar ruta del mp3 en el objeto audio
        // console.log(this.positionPlayList);

        this.playListBox.querySelectorAll('div').forEach((e, i)=>{
            if (i == this.positionPlayList) {
                e.classList.add('active');
            } else e.classList.remove('active');
        })
    },

    onPlay: function(){
        this.reproductor.classList.add('playing');
        this.audioObj.play();
        this.reproductor.querySelector('.info').innerHTML = `<b>Reproduciendo</b><br>${this.track.title}<br>${this.track.interprete}`;
    },

    onPause: function(){
        this.reproductor.classList.remove('playing');
        this.audioObj.pause();
        this.reproductor.querySelector('.info').innerHTML = '';
    },

    loadPlayList: function(){
        this.playList.forEach((el, index)=>{
            // console.log(el.title);
            const newItem = document.createElement('div');

            newItem.appendChild(document.createTextNode(el.title));
            newItem.addEventListener('click', ()=>{
                this.track = el;
                this.positionPlayList = index;
                this.loadTrack();
                this.onPlay();
            })

            this.playListBox.appendChild(newItem);
        });
    },

    init: function(){
        this.loadPlayList();
        this.reproductorHandler();
        
        document.querySelector('.foot').innerHTML = this.tipo;
        document.querySelector('title').innerHTML = this.tipo;
    }
}







