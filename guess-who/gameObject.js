const random = (max) => {
    return Math.floor(Math.random() * max);
}

const Game = {
  
    characters : generatedCharacters,
    selectedCharacter : null,
    closeCharacter : (event) =>{
        event.target.parentNode.classList.add('hide');
    },

    openCharacter : (event)=>{
        event.target.parentNode.classList.remove('hide')
    },

    handlerCharacters : ()=>{
        document.querySelectorAll('.character').forEach((character, index)=>{            
            character.id = this.characters[index].name;            
            character.firstChild.addEventListener('click', this.closeCharacter);
            character.lastChild.addEventListener('click', this.openCharacter);
        });
    },

    createSelectedCharacterCard : ()=>{
        const character = document.getElementById(this.selectedCharacter.name);
        const position = window.getComputedStyle(character)['background-position'];

        document.getElementById('selected').style.backgroundPosition = position;
        console.log(position);
    },

    selectRandomCharacter : ()=>{
        const randomCharacterIndex = random(this.characters.length);
        this.selectedCharacter = this.characters[randomCharacterIndex];
    },

    removeHideClasses : ()=>{
        document.querySelectorAll('.hide').forEach((element)=>{
            element.classList.remove('.hide');
        });
    },
    start : ()=>{
        this.removeHideClasses();
        this.handlerCharacters();
        this.selectRandomCharacter();
        this.createSelectedCharacterCard();
    },
};