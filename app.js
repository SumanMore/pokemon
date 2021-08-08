const poke_container = document.getElementById('poke_container')
const text = document.querySelector('#po')
const poke_numbers = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};
const main_types = Object.keys(colors);



async function clickHandler(event) {
    await getPokemon(text.value)
}


const btn = document.querySelector('#subm');
btn.addEventListener('click', clickHandler);

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()
    createPokemonCard(pokemon)
}
// fetchPokemons();
function createPokemonCard(pokemon) {
    const pokemonEl = document.querySelector('.pokemon')
    const poke_types = pokemon.types.map(el => el.type.name)

    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    const color = colors[type]
    pokemonEl.style.backgroundColor = color
    const pokeInnerHTML = `
        <div class = "img-container">
            <img src = "${pokemon.sprites.back_default}">
        </div>

        <div class = "info">
            <span class = "number">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class = "name"><span class="change1">${name}</span></h3>
            <small class = "type">Type: <span><b>${type}<b></span></small>
            <br>
            <p><b>Click here to know more</b></p>
        </div>
    `;
    const mbody = document.querySelector('.modal-body')
    mbody.innerHTML =
        `<div class="details">
        <p > <span class="change1">${pokemon.name} details</span> </p>
    Name: ${pokemon.name}<br>Weight: ${pokemon.weight}<br>
    Height: ${pokemon.height}<br>Move: ${pokemon.moves[0].move.name},${pokemon.moves[1].move.name}, ${pokemon.moves[2].move.name}, ${pokemon.moves[3].move.name},${pokemon.moves[4].move.name}, ${pokemon.moves[5].move.name}<br>
    Type: ${type}
    </div>
    `


    pokemonEl.innerHTML = pokeInnerHTML;
}
function abcd(event) {

}
document.querySelector('.pokemon').addEventListener('click', abcd)