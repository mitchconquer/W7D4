const dispatcher = require('../dispatcher/dispatcher');
const PokemonConstants = require('../constants/pokemon_constants');
const ApiUtil = require('../util/api_util');

const PokemonActions = {
  receiveAllPokemons(pokemons) {
    dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },
  receiveSinglePokemon(pokemon) {
    dispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  },
  receiveToy(toy) {
    dispatcher.dispatch({
      actionType: PokemonConstants.TOY_RECEIVED,
      toy: toy
    });
  },
  fetchAllPokemons() {
    ApiUtil.fetchAllPokemons(this.receiveAllPokemons);
  },
  fetchPokemon(id) {
    ApiUtil.fetchPokemon(id, this.receiveSinglePokemon);
  },
  fetchToy(id) {
    ApiUtil.fetchToy(id, this.receiveToy);
  }
};

module.exports = PokemonActions;
