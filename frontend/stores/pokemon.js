const dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;

const PokemonStore = new Store(dispatcher);

let _pokemons = {};
let _toy = {};

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "POKEMONS_RECEIVED":
      this.resetPokemons(payload.pokemons);
      break;
    case "POKEMON_RECEIVED":
      console.log(payload);
      this.resetPokemon(payload.pokemon);
      break;
    case "TOY_RECEIVED":
      console.log(payload);
      this.resetToy(payload.toy);
      break;
  }
};

PokemonStore.resetPokemons = function (pokemons) {
  _pokemons = {};
  pokemons.forEach(pokemon => {
    _pokemons[pokemon.id] = pokemon;
  });
  this.__emitChange();
};

PokemonStore.resetPokemon = function (pokemon) {
  _pokemons[pokemon.id] = pokemon;
  this.__emitChange();
};

PokemonStore.resetToy = function (toy) {
  _toy = toy;
  this.__emitChange();
};

PokemonStore.all = function () {
  const results = [];
  for (let id in _pokemons) {
    if ({}.hasOwnProperty.call(_pokemons, id)) {
      results.push(_pokemons[id]);
    }
  }
  return results;
};

PokemonStore.toy = function () {
  return _toy;
};

PokemonStore.find = function(id) {
  return _pokemons[id];
};

module.exports = PokemonStore;
