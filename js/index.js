const pokemonContainer = document.querySelector(".pokemon-container");
const btnContainer = document.querySelector(".btn-container");

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
  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  0;
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  const weight = document.createElement("p");
  weight.classList.add("weight");
  weight.textContent = `Peso: ${pokemon.weight} kg`;

  const height = document.createElement("p");
  height.classList.add("height");
  height.textContent = `Altura: ${pokemon.weight} cm`;

  const types = document.createElement("p");
  types.classList.add("types");
  types.textContent = "Tipo: ";

  pokemon.types.forEach((typeObj) => {
    const typeSpan = document.createElement("span");
    typeSpan.textContent = typeObj.type.name;
    types.appendChild(typeSpan);
  });

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(weight);
  card.appendChild(height);
  card.appendChild(types);

  pokemonContainer.appendChild(card);
}

function filterPokemon(filter) {
  const cards = document.querySelectorAll(".pokemon-block");

  cards.forEach((card) => {
        const typeSpans = card.querySelectorAll(".types span");
        let found = false;

        typeSpans.forEach((span) => {
        if (span.textContent === filter) {
            found = true;
        }
        });

        if (found) {
        card.style.display = "block";
        } else {
        card.style.display = "none";
        }
  });
}

fetchPokemons(300);