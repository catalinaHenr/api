
const pokemonContainer = document.querySelector('.pokemon-container');

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            createPokemon(data);
            console.log(data);
        });
}

function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }
}

function createPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name

    const weight = document.createElement('p');
    weight.classList.add('weight');
    weight.textContent = `Peso: ${pokemon.weight}`;

    const height = document.createElement('p');
    height.classList.add('height');
    height.textContent = `Altura: ${pokemon.weight}`;

    const types = document.createElement('p');
    types.classList.add('types');
    types.textContent = 'Tipo: '

    pokemon.types.forEach(typeObj => {
        const typeSpan = document.createElement('span');
        typeSpan.textContent = typeObj.type.name;
        types.appendChild(typeSpan);
    });

    card.addEventListener('click', () => {

        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modal.appendChild(modalContent);

        document.body.appendChild(modal);

    });

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(weight);
    card.appendChild(height);
    card.appendChild(types);

    pokemonContainer.appendChild(card);
}

fetchPokemons(100);

//classList.add ---> clase css

//sprite.src = pokemon.sprites.front_shiny  url imgenes pokemons
//sprite->lugar de imagenes = ruta.tipo de imagen