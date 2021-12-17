import { useEffect, useState } from "react";
import getAllPokemonApi from "../helpers/getAllPokemonApi";
// components
import PokeModal from "./PokeModal";
import PokemonCard from "./PokemonCard";


const Pokedex = ()=>{
    const count = 10;
    const [pokeList, setPokeList] = useState([]);
    const [infoModal, setInfoModal] = useState({});
    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(()=>{
        getAllPokemonApi(count).then((p)=>setPokeList(p));
    },[]);    

    // solo para saber el estado del modal por consola
    useEffect(()=>{console.log(`isOpenModal: ${isOpenModal}`)},[isOpenModal]);
    
    return(
        <div className="pokedex">
            <div>
                <div className="logo"></div>
                <div className="pokemons-list">
                    {
                        pokeList.map(({name, url}) => <PokemonCard 
                            url={url} 
                            key={name.toLowerCase()} 
                            setInfoModal={setInfoModal}
                            setIsOpenModal={setIsOpenModal}
                        />)
                    }
                </div>
            </div>
            <PokeModal 
                infoModal={infoModal} 
                setInfoModal={setInfoModal}
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
            />
        </div>
    );
}

export default Pokedex;