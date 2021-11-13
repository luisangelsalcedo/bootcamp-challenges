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

    closeCharacter(event){
        event.target.parentNode.classList.add('active');
    }

    openCharacter(event){
        event.target.parentNode.classList.remove('active')
    }

    handlerCharacters(){
        document.querySelectorAll('.character').forEach((character, index)=>{            
            character.id = this.characters[index].name;            
            character.firstChild.addEventListener('click', this.closeCharacter);
            character.lastChild.addEventListener('click', this.openCharacter);
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