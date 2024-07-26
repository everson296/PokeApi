var container = document.getElementById('container');

const createCards = (pokemon2) => {
    const padrao = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    
    if(pokemon2.types.length == 1){
        container.innerHTML+= `
        <div class="card">
            <div class="backgroundColor ${pokemon2.types[0].type.name}">
                <div class="id">${pokemon2.id}</div>
            </div>
            <img src="${padrao}${pokemon2.id}.png"/>

            <div class="name">${pokemon2.name}</div>
            <div class="types">
                <div class="type ${pokemon2.types[0].type.name}">${pokemon2.types[0].type.name}</div>
            </div>
        </div>
    `;
    }else{
        container.innerHTML+= `
        <div class="card">
            <div class="backgroundColor ${pokemon2.types[0].type.name}">
                <div class="id">${pokemon2.id}</div>
            </div>
            <img src="${padrao}${pokemon2.id}.png"/>

            <div class="name">${pokemon2.name}</div>
            <div class="types">
                <div class="type ${pokemon2.types[0].type.name}">${pokemon2.types[0].type.name}</div>
                <div class="type ${pokemon2.types[0].type.name}">${pokemon2.types[1].type.name}</div>
            </div>
        </div>
    `;   
    } 
}

const listarGeracao = async(e) => {
    if(e.target.id == "gem_1"){
        var startingN = 1;
        var finalN = 151;
        
    }else if(e.target.id == "gem_2"){
        var startingN = 152;
        var finalN = 251;  
        
    }else if(e.target.id == "gem_3"){
        var startingN = 252;
        var finalN = 386;   
        
    }else if(e.target.id == "gem_4"){
        var startingN = 387;
        var finalN = 493; 
        
    }else if(e.target.id == "gem_5"){
        var startingN = 494;
        var finalN = 649; 
        
    }else if(e.target.id == "gem_6"){
        var startingN = 650;
        var finalN = 721; 
        
    }else if(e.target.id == "gem_7"){
        var startingN = 722;
        var finalN = 809; 
        
    }else if(e.target.id == "gem_8"){
        var startingN = 810;
        var finalN = 905;   
        
    }else if(e.target.id == "gem_9"){
        var startingN = 906;
        var finalN = 1008;   
    }
        
    gerarCards(startingN, finalN);
    
}

const gerarCards = async (startingN, finalN) => {
    container.innerHTML= ``;
    
    for(let i = startingN; i <= finalN; i++){
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        const dados = await fetch(`${url}${i}`);
        const pokemon = await dados.json();

        createCards(pokemon)
    }
}

document.getElementById('gem_1').addEventListener('click', listarGeracao);
document.getElementById('gem_2').addEventListener('click', listarGeracao);
document.getElementById('gem_3').addEventListener('click', listarGeracao);
document.getElementById('gem_4').addEventListener('click', listarGeracao);
document.getElementById('gem_5').addEventListener('click', listarGeracao);
document.getElementById('gem_6').addEventListener('click', listarGeracao);
document.getElementById('gem_7').addEventListener('click', listarGeracao);
document.getElementById('gem_8').addEventListener('click', listarGeracao);
document.getElementById('gem_9').addEventListener('click', listarGeracao);