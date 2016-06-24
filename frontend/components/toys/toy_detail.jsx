const React = require('react');
const PokemonStore = require('../../stores/pokemon');
const PokemonActions = require('../../actions/pokemon_actions');

const ToyDetail = React.createClass({
  getInitialState() {
    return {toy: this.getStateFromStore() };
  },
  componentDidMount() {
    this.listener = PokemonStore.addListener(this._onChange);
    PokemonActions.fetchToy(this.props.params.toyId);
  },
  componentWillUnmount() {
    this.listener.remove();
  },
  componentWillReceiveProps(nextProps) {
    PokemonActions.fetchToy(this.props.params.toyId);
  },
  getStateFromStore() {
    return PokemonStore.toy();
  },
  _onChange() {
    this.setState({toy: this.getStateFromStore() });
  },
  render() {
    console.log(this.props.params);
    if (this.state.toy) {
      const toy = this.state.toy;
      return (
        <div className="detail">
          <img src={toy.image_url} />
          <h3>{toy.name}</h3>
          <ul>
            <li>Happiness: {toy.happiness}</li>
            <li>Price: {toy.price}</li>
          </ul>
        </div>
      );
    }
    return (<div></div>);
  }

});

module.exports = ToyDetail;
