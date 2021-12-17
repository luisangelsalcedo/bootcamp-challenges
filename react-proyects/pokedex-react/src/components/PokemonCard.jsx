import { useState, useEffect } from "react";

const PokemonCard = ({url, setInfoModal, setIsOpenModal})=>{

    const [pokemon, setPokemon] = useState({});

    const getPokemonFetch = async ()=>{
        const pokefetch = await fetch(url).then(res => res.json());
        const species = await fetch(pokefetch.species.url).then(res => res.json());        
        const types = pokefetch.types.map(t => t.type.name)??[];
        const abilities = pokefetch.abilities.map(a => a.ability.name)??[]; 
        const moves = pokefetch.moves.map(m => m.move.name)??[];
        const movesListStr = (moves.length > 10) ? moves.slice(0, 10).join(', ') + '...' : moves.join(', ');

        setPokemon({
            name: pokefetch.name,
            id: pokefetch.id,
            image: pokefetch.sprites.other.dream_world.front_default,
            imageFront: pokefetch.sprites.front_default,
            imageBack: pokefetch.sprites.back_default,
            color: species.color.name,
            type: types,
            abilities: abilities.join(', '),
            moves: movesListStr
        });
    }

    useEffect(()=>{
        getPokemonFetch();
    });

    const openModal = () => {
        setInfoModal(pokemon);
        setIsOpenModal(true);
    }

    return (
        <div className="pokemon" data-color={pokemon.color} onClick={openModal}>
            <img src={pokemon.imageFront} alt="" />
            <p className="num">{pokemon.id}</p>
            <p>{pokemon.name}</p>
        </div>
    )
}

export default PokemonCard;