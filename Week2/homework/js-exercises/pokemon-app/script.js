window.addEventListener('load', main);

// The main function
function main() {
  // insert the basic DOM
  document.body.innerHTML = `
  <div class="container">
  <div class="card"><button id="getPokemon">Get Pokemon</button></div>
  <div class="pokemonContainer card"></div>
  <div class="pokemonImage card"></div></div>`;

  // declare the variables
  let pokemonContainer = document.querySelector('.pokemonContainer');
  let getPokemon = document.getElementById('getPokemon');
  getPokemon.addEventListener('click', fetchData);

  // The function fetch Data
  function fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => res.json())
      .then(resData => {
        let pokemonName = resData.results;
        pokemonContainer.innerHTML =
          '<select name="choice" id="pokemon"></select>';
        let pokemon = document.getElementById('pokemon');

        // Inject pokemon names in the list
        let options = '';
        for (let i in pokemonName) {
          options += `<option value="${i}">${pokemonName[i].name}</option>`;
        }
        pokemon.innerHTML = options;

        // to change the back ground of the list
        let flag = true;
        pokemon.addEventListener('click', () => {
          if (flag) {
            pokemon.className = 'opened';
          } else {
            pokemon.className = 'chosed';
          }
          flag = !flag;
        });

        // select the pokemon
        pokemon.addEventListener('change', function() {
          let imageUrl = pokemonName[this.value].url;
          addPokemonToDOM(imageUrl);
        });
      })
      .catch(err => console.log(err));
  }

  // to print the pokemon image to DOM
  function addPokemonToDOM(info) {
    axios
      .get(info)
      .then(respon => {
        let pokemonImage = document.querySelector('.pokemonImage');
        pokemonImage.innerHTML = `'<img src="${respon.data.sprites.front_default}" alt="pokemon" width=120>`;
      })
      .catch(err => console.log(err));
  }
}
