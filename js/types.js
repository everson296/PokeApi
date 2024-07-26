'use strict';
// limite de pokemons
// especiais de 10001 - 10220
// normal: 131; 

const url = `https://pokeapi.co/api/v2/type/`;
const container = document.getElementById('container');
const li = document.querySelectorAll(".itemsTypes");

const cont = 100;

const cardPokemon = (pokemon, i) => {
    
    if(pokemon.types.length == 1){
       container.innerHTML+= `
        <div class="card">
            <div class="backgroundColor ${pokemon.types[0].type.name}">
                <div class="id">${pokemon.id}</div>
            </div>
            <img src="${pokemon.sprites.front_default}"/>

            <div class="name">${pokemon.name}</div>
            <div class="types">
                <div class="type ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</div>
            </div>
        </div>
    `;
    }else{
        container.innerHTML+= `

        <div class="card">
            <div class="backgroundColor ${pokemon.types[0].type.name}">
                <div class="id">${pokemon.id}</div>
            </div>
            <img src="${pokemon.sprites.front_default}"/>

            <div class="name">${pokemon.name}</div>
            <div class="types">
                <div class="type ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</div>
                <div class="type ${pokemon.types[0].type.name}">${pokemon.types[1].type.name}</div>
            </div>
        </div>

    `;   
    }
}

const listPokemon = async(rr) => {
    for( let i = 1; i <= cont; i++ ){

        const dados = await fetch(`${url}${rr}`);
        const pokemon = await dados.json();
        
        const url2 = 'https://pokeapi.co/api/v2/pokemon/';
        const dados2 = await fetch(`${url2}${pokemon.pokemon[`${i-1}`].pokemon.name}`);
        const pokemon2 = await dados2.json();
        let id = pokemon2.id;
        
        cardPokemon(pokemon2, id)   
    }
}

const getType = async(e) => {

    let n = e.target.id;
    
    container.innerHTML = '';
    listPokemon(n);
}

document.getElementById('normal').addEventListener('click', getType)
document.getElementById('fighting').addEventListener('click', getType)
document.getElementById('flying').addEventListener('click', getType)
document.getElementById('poison').addEventListener('click', getType)
document.getElementById('ground').addEventListener('click', getType)
document.getElementById('rock').addEventListener('click', getType)
document.getElementById('bug').addEventListener('click', getType)
document.getElementById('ghost').addEventListener('click', getType)
document.getElementById('steel').addEventListener('click', getType)
document.getElementById('fire').addEventListener('click', getType)
document.getElementById('water').addEventListener('click', getType)
document.getElementById('grass').addEventListener('click', getType)
document.getElementById('electric').addEventListener('click', getType)
document.getElementById('psychic').addEventListener('click', getType)
document.getElementById('ice').addEventListener('click', getType)
document.getElementById('dragon').addEventListener('click', getType)
document.getElementById('dark').addEventListener('click', getType)
document.getElementById('fairy').addEventListener('click', getType)

//listPokemon();





























