'use strict';

const audioObj = new Audio();
const playList = playListObj;
const reproductor = document.querySelector('main');
const playListBox = document.querySelector('.playlist');
const path = 'mp3/';
let track = null;
let positionPlayList = 0;



const reproductorHandler = ()=>{
    
    const btnPlay = document.getElementById('play');
    const btnPause = document.getElementById('pause');

    btnPlay.addEventListener('click', onPlay);
    btnPause.addEventListener('click', onPause);

    track = playList[positionPlayList]; // guardar referencia del mp3 en reproducción
    loadTrack();
}

const loadTrack = ()=>{
    audioObj.src = path + track.src; // cargar ruta del mp3 en el objeto audio
    console.log(positionPlayList);

    playListBox.querySelectorAll('div').forEach((e,i)=>{
        if (i == positionPlayList) {
            e.classList.add('active');
        } else e.classList.remove('active');
    })
}

const onPlay = ()=>{
    reproductor.classList.add('playing');
    audioObj.play();
    reproductor.querySelector('.info').innerHTML = `<b>Reproduciendo</b><br>${track.title}<br>${track.interprete}`
}

const onPause = ()=>{
    reproductor.classList.remove('playing');
    audioObj.pause();
    reproductor.querySelector('.info').innerHTML = '';
}

const loadPlayList = ()=>{
    playList.forEach((el,index)=>{
        // console.log(el.title);
        const newItem = document.createElement('div');
        
        newItem.appendChild(document.createTextNode(el.title));
        newItem.addEventListener('click',()=>{
            track = el;
            positionPlayList = index;
            loadTrack();
            onPlay();
        })
            
        playListBox.appendChild(newItem);
    });    
}
const init = ()=>{
    loadPlayList();
    reproductorHandler();
}


