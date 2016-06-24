const React = require('react'),
      PokemonStore = require('../../stores/pokemon'),
      PokemonActions = require('../../actions/pokemon_actions'),
      ToysIndex = require('../toys/toys_index');

const PokemonDetail = React.createClass({
  getInitialState(){
    return({pokemon: this.getStateFromStore()});
  },
  componentDidMount() {
    PokemonStore.addListener(this.receiveSinglePokemon);
    PokemonActions.fetchPokemon(this.props.params.pokemonId);
  },
  getStateFromStore() {
    return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },
  receiveSinglePokemon() {
    this.setState({pokemon: this.getStateFromStore() });
  },
  componentWillReceiveProps(nextProps) {
    PokemonActions.fetchPokemon(nextProps.params.pokemonId);
  },
  render() {
    if (this.state.pokemon) {
      const pokemon = this.state.pokemon;
       return (
        <div>
          <div className="pokemon-detail-pane">
            <div className="detail">
              <img src={pokemon.image_url} />
              <h3>{pokemon.name}</h3>
              <ul>
                <li>Poke_type: {pokemon.poke_type}</li>
                <li>Attack: {pokemon.attack}</li>
                <li>Defense: {pokemon.defense}</li>
                <li>Moves: {pokemon.moves.join(", ")}</li>
              </ul>
            </div>
            <ToysIndex toys={pokemon.toys} />
          </div>
          {this.props.children}
        </div>
      );
    }

    return (<div></div>);
  }
});

module.exports = PokemonDetail;
