"use strict"
const pesquisa = document.getElementById("pesquisa");
const url = `https://pokeapi.co/api/v2/pokemon/`;

const pesquisarPokemon = async(e) => {
    const tecla = e.key;
     
    if(tecla == 'Enter'){
        container.innerHTML=``;
        const name = pesquisa.value;
        const dados = await fetch(`${url}${name}`);
        const pokemon = await dados.json();
        const id = pokemon.id;
        const animate = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
        
        if(pokemon.types.length > 1){
            container.innerHTML = `
            <div id="cardOne">
                <div id="pokeName">${pokemon.name}</div>
                <div id="containerInfo">
                    
                    <div id="pokeInfo">
                        <div class="itensInfo">
                            <div class="titleInfo"> id </div>
                            <div class="resInfo"> #${pokemon.id} </div>
                        </div>
                        
                        <div class="itensInfo">
                            <div class="titleInfo"> height </div>
                            <div class="resInfo"> ${pokemon.height} </div>
                        </div>
                        
                        <div class="itensInfo">
                            <div class="titleInfo"> width </div>
                            <div class="resInfo"> ${pokemon.weight} </div>
                        </div>
                        
                        <div class="itensInfo">
                            <div class="titleInfo"> abilities </div>
                            <div class="resInfo"> <span class="btnInfo ${pokemon.types[0].type.name}" id="btnAbilities">${pokemon.abilities[0].ability.name}</span> </div>
                        </div>
                        
                        <div class="itensInfo">
                            <div class="titleInfo"> type </div>
                            <div class="resInfo"> <span class="infoType  ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span> <span class="infoType  ${pokemon.types[0].type.name}">${pokemon.types[1].type.name}</span></div>
                            
                        </div>
                        
                        <div class="itensInfo">
                            <div class="titleInfo"> forms </div>
                            <div class="resInfo"> <span class="btnInfo  ${pokemon.types[0].type.name}">${pokemon.forms[0].name}</span> <span class="btnInfo">mega rayquaza</span> </div>
                        </div>
                    </div>
                    
                    <div id="pokeImg">
                        <span id="circleImg" class="${pokemon.types[0].type.name}"></span>
                        <img src="${animate}${pokemon.id}.png"/>
                    </div>
                    
                    <div id="pokeStatus">
                        <div class="itensStatus">
                            <div class="titleInfo"> hp </div>
                            <div class="resStatus ${pokemon.types[0].type.name}"> <p>${pokemon.stats[0].base_stat}</p> </div>
                        </div>
                        
                        <div class="itensStatus">
                            <div class="titleInfo"> attack </div>
                            <div class="resStatus ${pokemon.types[0].type.name}"> <p>${pokemon.stats[1].base_stat}</p> </div>
                        </div>
                        
                        <div class="itensStatus">
                            <div class="titleInfo"> defence </div>
                            <div class="resStatus ${pokemon.types[0].type.name}"> <p>${pokemon.stats[2].base_stat}</p> </div>
                        </div>
                        
                        <div class="itensStatus">
                            <div class="titleInfo"> sp.attack </div>
                            <div class="resStatus ${pokemon.types[0].type.name}"> <p>${pokemon.stats[3].base_stat}</p> </div>
                        </div>
                        
                        <div class="itensStatus">
                            <div class="titleInfo"> sp.defence </div>
                            <div class="resStatus ${pokemon.types[0].type.name}"> <p>${pokemon.stats[4].base_stat}</p> </div>
                        </div>
                        
                        <div class="itensStatus">
                            <div class="titleInfo"> speed </div>
                            <div class="resStatus ${pokemon.types[0].type.name}"> <p>${pokemon.stats[5].base_stat}</p> </div>
                        </div>
                        
                        <div class="itensStatus">
                            <div class="titleInfo"> total </div>
                            <div class="resStatus ${pokemon.types[0].type.name}"> <p>${pokemon.stats[0].base_stat + pokemon.stats[2].base_stat + pokemon.stats[3].base_stat + pokemon.stats[4].base_stat + pokemon.stats[5].base_stat}</p> </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        `;
        }else{
            container.innerHTML = `
            <div id="cardOne">
                <div id="pokeName">${pokemon.name}</div>
                <div id="containerInfo">
                    
                    <div id="pokeInfo">
                        <div class="itensInfo">
                            <div class="titleInfo"> id </div>
                            <div class="resInfo"> #${pokemon.id} </div>
                        </div>
                        
                        <div class="itensInfo">
                            <div class="titleInfo"> height </div>
                            <div class="resInfo"> ${pokemon.height} </div>
                        </div>
                        
                        <div class="itensInfo">
                            <div class="titleInfo"> width </div>
                            <div class="resInfo"> ${pokemon.weight} </div>
                        </div>
                        
                        <div class="itensInfo">
                            <div class="titleInfo"> abilities </div>
                            <div class="resInfo"> <span class="btnInfo ${pokemon.types[0].type.name}" id="btnAbilities">${pokemon.abilities[0].ability.name}</span> </div>
                        </div>
                        
                        <div class="itensInfo">
                            <div class="titleInfo"> type </div>
                            <div class="resInfo"> <span class="infoType  ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span></div>
                        </div>
                        
                        <div class="itensInfo">
                            <div class="titleInfo"> forms </div>
                            <div class="resInfo"> <span class="btnInfo  ${pokemon.types[0].type.name}">${pokemon.forms[0].name}</span> <span class="btnInfo">mega rayquaza</span> </div>
                        </div>
                    </div>
                    
                    <div id="pokeImg">
                        <span id="circleImg" class="${pokemon.types[0].type.name}"></span>
                        <img src="${animate}${pokemon.id}.png"/>
                    </div>
                    
                    <div id="pokeStatus">
                        <div class="itensStatus">
                            <div class="titleInfo"> hp </div>
                            <div class="resStatus ${pokemon.types[0].type.name}"> <p>${pokemon.stats[0].base_stat}</p> </div>
                        </div>
                        
                        <div class="itensStatus">
                            <div class="titleInfo"> attack </div>
                            <div class="resStatus ${pokemon.types[0].type.name}"> <p>${pokemon.stats[1].base_stat}</p> </div>
                        </div>
                        
                        <div class="itensStatus">
                            <div class="titleInfo"> defence </div>
                            <div class="resStatus ${pokemon.types[0].type.name}"> <p>${pokemon.stats[2].base_stat}</p> </div>
                        </div>
                        
                        <div class="itensStatus">
                            <div class="titleInfo"> sp.attack </div>
                            <div class="resStatus ${pokemon.types[0].type.name}"> <p>${pokemon.stats[3].base_stat}</p> </div>
                        </div>
                        
                        <div class="itensStatus">
                            <div class="titleInfo"> sp.defence </div>
                            <div class="resStatus ${pokemon.types[0].type.name}"> <p>${pokemon.stats[4].base_stat}</p> </div>
                        </div>
                        
                        <div class="itensStatus">
                            <div class="titleInfo"> speed </div>
                            <div class="resStatus ${pokemon.types[0].type.name}"> <p>${pokemon.stats[5].base_stat}</p> </div>
                        </div>
                        
                        <div class="itensStatus">
                            <div class="titleInfo"> total </div>
                            <div class="resStatus ${pokemon.types[0].type.name}"> <p>${pokemon.stats[0].base_stat + pokemon.stats[2].base_stat + pokemon.stats[3].base_stat + pokemon.stats[4].base_stat + pokemon.stats[5].base_stat}</p> </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        `;
        }

       
    }
}

pesquisa.addEventListener('keypress', pesquisarPokemon);
