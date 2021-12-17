const getAllPokemonApi = async (count = 3)=>{

    const API = `https://pokeapi.co/api/v2/pokemon`;
    const response = await fetch(`${API}?offset=0&limit=${count}`);
    const pokemons = await response.json();    
    return pokemons.results;
}

export default getAllPokemonApi