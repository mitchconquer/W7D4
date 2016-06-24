const React = require('react'),
      PokemonStore = require('../../stores/pokemon.js'),
      PokemonActions = require('../../actions/pokemon_actions'),
      PokemonIndexItem = require('./pokemon_index_item.jsx');

const PokemonsIndex = React.createClass({
  getInitialState() {
    return { pokemons: PokemonStore.all() };
  },
  componentDidMount() {
    this.changeListener = PokemonStore.addListener(this._onChange);
    PokemonActions.fetchAllPokemons();
  },
  componentWillUnmount() {
    this.changeListener.remove();
  },
  _onChange() {
    this.setState({ pokemons: PokemonStore.all() });
  },
  render() {
    return(
      <div className="pokemon-index">
        {
          this.state.pokemons.map(pokemon =>{
            return <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />;
          })
        }
      </div>
    );
  }
});

module.exports = PokemonsIndex;
