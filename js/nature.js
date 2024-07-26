const contianer = document.getElementById('container');
const frut = document.getElementById('focusNature');

const listNature = async() => {
    container.innerHTML=``;
    for( let i = 1; i <= 25; i++ ){
        const urlNature = 'https://pokeapi.co/api/v2/nature/';
        const dados = await fetch(`${urlNature}${i}`);
        const pokemon = await dados.json();
        
        if(pokemon.decreased_stat === null){
           container.innerHTML+=` 
                <div class="card">
                    <div class="name">${pokemon.name}</div>

                    <div class="info">
                        <div class="status blue">
                            <i class="fa-solid fa-arrow-up"></i>
                            <div class="statusName">neutro</div>
                        </div>

                        <div class="status red">
                            <i class="fa-solid fa-arrow-down"></i>
                            <div class="statusName">neutro</div>
                        </div>
                    </div>
                </div>
            `; 
        }else{
            container.innerHTML+=` 

                <div class="card">
                    <div class="name">${pokemon.name}</div>

                    <div class="info">
                        <div class="status blue">
                            <i class="fa-solid fa-arrow-up"></i>
                            <div class="statusName">${pokemon.increased_stat.name}</div>
                        </div>

                        <div class="status red">
                            <i class="fa-solid fa-arrow-down"></i>
                            <div class="statusName">${pokemon.decreased_stat.name}</div>
                        </div>
                    </div>
                </div>
            `; 
        } 
    }
}

listNature();






















































































































