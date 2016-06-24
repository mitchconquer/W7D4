const React = require('react');
import { Link } from 'react-router';

const PokemonIndexItem = React.createClass({
  render() {
    const idLink = "/pokemon/" + this.props.pokemon.id;
    return(
      <div className="poke-list-item">
        <Link to={idLink}>
          Name: {this.props.pokemon.name}
          &nbsp;
          Type: {this.props.pokemon.poke_type}
        </Link>
      </div>
    );
  }
});

module.exports = PokemonIndexItem;
