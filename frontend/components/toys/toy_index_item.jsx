const React = require('react');
import { Link } from 'react-router';

const ToyIndexItem = React.createClass({
  render() {
    const toy = this.props.toy;
    const toyLink = "/pokemon/" + toy.pokemon_id + "/toys/" + toy.id;
    return(
      <li className="toy-list-item">
        <Link to={toyLink}>
          Name: {toy.name}<br />
          Happiness: {toy.happiness}<br />
          Price: {toy.price}
        </Link>
      </li>
    );
  }
});

module.exports = ToyIndexItem;
