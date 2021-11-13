const random = (max) => {
    return Math.floor(Math.random() * max);
}

class Game {
    constructor(){
        this.characters = generatedCharacters;
        this.selectedCharacter = null;
        this.randomCharacterIndex = random(this.characters.length);

        this.handlerCharacters();
    }

    handlerCharacters(){
        document.querySelectorAll('.character').forEach((character, index)=>{
            
            character.id = this.characters[index].name;
            
            character.firstChild.addEventListener('click', ()=>{
                character.classList.add('active');
            });
            character.lastChild.addEventListener('click', ()=>{
                character.classList.remove('active');
            });
        });
    }
    
    createSelectedCharacterCard(){
        const character = document.getElementById(this.selectedCharacter.name);
        const position = window.getComputedStyle(character)['background-position'];

        document.getElementById('selected').style.backgroundPosition = position;
        console.log(position);
    }
    selectRandomCharacter(){
        this.selectedCharacter = this.characters[this.randomCharacterIndex];
        this.createSelectedCharacterCard();
    }
    start(){
        this.selectRandomCharacter();
    }
}
const game = new Game();
game.start();