const API = "https://pokeapi.co/api/v2/pokemon";
const count = 150;
const pokedex = document.getElementById("pokedex");
const info = document.getElementById("info");
const infoContainer = document.querySelector(".info-container");
let pokemonList = [];

const init = async () => {
  const response = await fetch(`${API}?offset=0&limit=${count}`);
  const pokemons = await response.json();

  pokemonList = [...pokemons.results];
  !pokemons
    ? console.error("error cargando pokemons")
    : pokemonsList(pokemonList);
};

const pokemonsList = async arrPokemons => {
  await arrPokemons.forEach(async (pokemon, i) => {
    // HTML
    const pokeDiv = document.createElement("div");
    const pokeID = document.createElement("p");
    const pokeName = document.createElement("p");
    const pokeImage = document.createElement("img");
    pokeDiv.classList.add("pokemon");
    pokedex.append(pokeDiv);

    // FETCH
    const response = await fetchPokemonData(pokemon.url);
    const { id, name, sprites, species } = response;
    pokemonList[i] = { ...pokemonList[i], ...response };

    // SET propiedades
    pokeID.classList.add("num");
    pokeID.innerText = id;
    pokeName.innerText = name;
    pokeImage.setAttribute("src", sprites.front_default);
    pokeDiv.id = id;
    pokeDiv.setAttribute("data-color", species.color.name);
    pokeDiv.append(pokeID, pokeImage, pokeName);

    // EVENT
    pokeDiv.addEventListener("click", () => openInfo(i));
  });
};

const fetchPokemonData = async url => {
  const resp1 = await fetch(url);
  const data1 = await resp1.json();
  const { species } = data1;
  const resp2 = await fetch(species.url);
  const data2 = await resp2.json();

  return { ...data1, species: { ...data2 } };
};

const openInfo = i => {
  //   console.log(pokemonList[i]);
  openModal(i);
  const { id, name, sprites, abilities, species, types, moves } =
    pokemonList[i];

  //imagen
  const pokeIMG = sprites.other.dream_world.front_default;
  const pokeimgFront = sprites.front_default;
  const pokeimgBack = sprites.back_default;

  //Habilidades
  const pokeAbility = abilities.map(a => a.ability.name).join(", ");

  //movimientos
  const pokeMoves = moves.map(m => m.move.name);
  const pokeMovesResumen =
    pokeMoves.length > 10
      ? `${pokeMoves.slice(0, 10).join(", ")}...`
      : pokeMoves.join(", ");

  //especie / color
  infoContainer.setAttribute("data-color", species.color.name);

  //tipo de pokemon
  const pokeTypes = types.map(t => t.type.name);
  let pokeTypesHTML = "";
  pokeTypes.forEach(tipo => (pokeTypesHTML += `<span>${tipo}</span>`));

  info.lastChild.innerHTML = `
        <div>
            <div><h1>${name}<small>${pokeTypesHTML}</small></h1></div>
            <div class="images">
                <div class="img">
                    <img src="${pokeIMG}" alt="${name}">
                </div>
                <div class="imgs">
                    <div><img src="${pokeimgFront}" alt="${name} (vista de frente)"></div>
                    <div><img src="${pokeimgBack}" alt="${name} (vista de trasera)"></div>
                </div>
            </div> 
            <div class="info">
                <div><h3>Abilities</h3> ${pokeAbility}</div>
                <div><h3>Moves</h3> ${pokeMovesResumen}</div>
            </div>
        </div>            
        <div class="bg"><span class="num">${id}</span></div>
        `;
};

const openModal = i => {
  const nextID = i >= count - 1 ? 0 : i + 1;
  const prevID = i <= 0 ? count - 1 : i - 1;

  //btn next
  const btnNext = document.createElement("a");
  btnNext.innerHTML =
    '<i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>';
  btnNext.classList.add("btn-next");
  btnNext.addEventListener("click", () => openInfo(nextID));

  //btn prev
  const btnPrev = document.createElement("a");
  btnPrev.innerHTML =
    '<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>';
  btnPrev.classList.add("btn-prev");
  btnPrev.addEventListener("click", () => openInfo(prevID));

  //btn cerrar
  const btnClose = document.createElement("a");
  btnClose.innerHTML =
    '<i class="fa fa-times-circle fa-2x" aria-hidden="true"></i>';
  btnClose.classList.add("btn-close");
  btnClose.addEventListener("click", () => cerrarModal());

  //container
  const container = document.createElement("div");
  container.classList.add("container");

  infoContainer.setAttribute("id", `poke${i + 1}`);
  infoContainer.classList.add("active");
  info.innerText = "";
  info.prepend(btnNext, btnPrev, btnClose, container);
};

const cerrarModal = () => {
  infoContainer.classList.remove("active");
  info.innerHTML = "";
};

init();
