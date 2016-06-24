const React = require('react'),
      ReactDOM = require('react-dom'),
      ApiUtil = require('./util/api_util.js'),
      PokemonActions = require('./actions/pokemon_actions'),
      PokemonStore = require('./stores/pokemon'),
      PokemonDetail = require('./components/pokemons/pokemon_detail'),
      ToyDetail = require('./components/toys/toy_detail'),
      App = require('./components/app');

import { Router, Route, hashHistory } from 'react-router';

const routes = (
                <Route path="/" component={App}>
                  <Route path="/pokemon/:pokemonId" component={PokemonDetail}>
                    <Route path="/pokemon/:pokemonId/toys/:toyId" component={ToyDetail} />
                  </Route>
                </Route>
                );

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('root'));
});
