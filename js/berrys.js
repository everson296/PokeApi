const listBerry = async() => {
    container.innerHTML=``;
    
    for( let i = 1; i <= 64; i++ ){
        const urlBerry = 'https://pokeapi.co/api/v2/berry/';
        const dados = await fetch(`${urlBerry}${i}`);
        const berry = await dados.json();
                
        container.innerHTML+=` 
            <div class="card">
                <img src="../../img/berrys/${i}.png"/>
                <div class="idName">
                    <div class="id">${berry.id}</div>
                    <div class="name">${berry.name}</div>
                </div>
            </div>
        `;
    }
    console.log()
}

listBerry();