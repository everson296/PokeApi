'use strict';
// limite de 898
// especiais de 10001 - 10220
const pesquisa = document.getElementById("pesquisa");
const url = `https://pokeapi.co/api/v2/pokemon/`;
const container = document.getElementById('container');

const cardPokemon = (pokemon, i) => {
    const padrao = pokemon.sprites.front_default;

    if(pokemon.types.length == 1){
       container.innerHTML+= `
        <div class="card">
            <div class="backgroundColor ${pokemon.types[0].type.name}">
                <div class="id">${pokemon.id}</div>
            </div>
            <img src="${padrao}"/>

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
            <img src="${padrao}"/>

            <div class="name">${pokemon.name}</div>
            <div class="types">
                <div class="type ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</div>
                <div class="type ${pokemon.types[0].type.name}">${pokemon.types[1].type.name}</div>
            </div>
        </div>
    `;   
    }
}

const listPokemon = async() => {
    const tempdados = await fetch(`${url}`);
    const temppokemon = await tempdados.json();

    for( let i = 1; i <= temppokemon.count; i++ ){
        const dados = await fetch(`${url}${i}`);
        const pokemon = await dados.json();
        cardPokemon(pokemon, i)
    }
}

listPokemon();