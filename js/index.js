
const pokemonContainer = document.querySelector('.pokemon-container');

function fetchPokemon(id)  {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            createPokemon(data);
            console.log(data);
        });
}

function fetchPokemons(number) {
    for (let i = 1; i<= number; i++) {
        fetchPokemon(i);
    }
}

function createPokemon(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.back_default

    spriteContainer.appendChild(sprite);

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name

    const weight = document.createElement('p');
    weight.classList.add('weight');
    weight.textContent = `Peso: ${pokemon.weight}`;

    const height = document.createElement('p');
    height.classList.add('height');
    height.textContent = `Altura: ${pokemon.weight}`;

    card.appendChild(spriteContainer);
    card.appendChild(name);
    card.appendChild(weight);
    card.appendChild(height);

    pokemonContainer.appendChild(card);
}

fetchPokemons(100);

//classList.add ---> clase css

//sprite.src = pokemon.sprites.front_shiny  url imgenes pokemons
//sprite->lugar de imagenes = ruta.tipo de imagen