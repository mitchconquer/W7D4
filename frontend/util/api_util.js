module.exports = {
  fetchAllPokemons: function(callback) {
    $.ajax({
      url: 'api/pokemon',
      dataType: 'json',
      success: callback,
    });
  },

  fetchPokemon: function(id, callback) {
    $.ajax({
      url: `api/pokemon/${id}`,
      dataType: 'json',
      success: callback,
    });
  },

  fetchToy: function (id, callback) {
    $.ajax({
      url: `api/toys/${id}`,
      dataType: 'json',
      success: callback,
    });
  }
};
