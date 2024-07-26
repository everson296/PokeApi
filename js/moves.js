// 844
const listMoves = async() => {
        const urlMove2 = 'https://pokeapi.co/api/v2/move/';
        const dados2 = await fetch(`${urlMove2}`);
        const pokemon2 = await dados2.json();
    
    container.innerHTML=``;
    for( let i = 1; i <= pokemon2.count; i++ ){
        const urlMove = 'https://pokeapi.co/api/v2/move/';
        const dados = await fetch(`${urlMove}${i}`);
        const pokemon = await dados.json();
                
        container.innerHTML+=` 
            <div class="card">
                <div class="move ${pokemon.type.name}">${pokemon.name}</div>        
                <div class="type">${pokemon.type.name}</div>        
            </div>
        `;
    }
}

listMoves();