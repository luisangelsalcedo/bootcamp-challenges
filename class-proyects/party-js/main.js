
const allsonidos = [
    'fizzle.wav',
    'hat.wav',
    'kick.wav',
    'snare.wav',
    'snarezz.wav',
    'synth.wav',
    'vox1.wav',
    'vox2.wav',
    'vox3.wav',
    'wood.wav',
];
function logKey({key:keynumber}) {
    if (keynumber >= 0 && keynumber < 10) {
       
        const balloon = document.getElementById(`balloon_${keynumber}`);
        const allBalloon = document.querySelectorAll('.balloon');

        allBalloon.forEach(e => {
            e.classList.remove('blow');
            e.innerText = '';
        });
        balloon.classList.add('blow');        
        balloon.innerText = keynumber;

        const audioObj = new Audio();
        audioObj.src = `sounds/${allsonidos[keynumber]}`;
        audioObj.currentTime = 0;
        audioObj.play();
    }
}
document.addEventListener('keypress', logKey);