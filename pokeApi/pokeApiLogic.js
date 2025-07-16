const pokemonList = async (urlTwo) => {
    const pokeList = await getData(urlTwo);
    const board = document.getElementById('place-to-show');
    let pokemons = {};
    pokeList.results.map((item, index) => {
        console.log(index+"  "+item.name);
        board.innerHTML += 
            `
            <div class="text-center bg-white m-3">
                <h1> Index: ${index+1} Item: ${item.name}</h1>
            </div>
            `;
        pokemons = getData(urlTwo.concat(`/${item.name}`))
        board.innerHTML += 
            `
            <div class="text-center bg-cyan-200 m-3 p-4">
                <h1> Index: ${index+1} Item: ${pokemons}</h1>
                <img src="${pokemons.sprites.front_default}" ></img>
            </div>
            `;
    });
    console.log(pokemons)

}


const getData = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(Object.keys(data));
        return data
    }
    catch(err){
        alert(`The error was ${err}`);
    }
    
}

const pokeApiUrlMain = "https://pokeapi.co/api/v2/pokemon/ditto";
const pokeApiUrlAllPokemon = "https://pokeapi.co/api/v2/pokemon";

const getPokemonList = document.getElementById('get-pokemon');
getPokemonList.addEventListener('click',()=>{
    pokemonList(pokeApiUrlAllPokemon)
    });
