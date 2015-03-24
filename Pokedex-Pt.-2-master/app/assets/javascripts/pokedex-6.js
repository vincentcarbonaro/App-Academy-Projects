Pokedex.Router = Backbone.Router.extend({
  routes: {
    "": "pokemonIndex",
    "pokemon/:id": "pokemonDetail",
    "pokemon/:pokemonId/toys/:toyId": "toyDetail"
  },

  pokemonDetail: function (id, callback) {
    if (!this._pokemonIndex) {
      this.pokemonIndex( this.pokemonDetail.bind(this, id, callback) )
    }

    if (this._pokemonIndex.collection.get(id)) {
      var pokemon = this._pokemonIndex.collection.get(id);
      var pokemonDetail = new Pokedex.Views.PokemonDetail(pokemon);
      this._pokemonDetail = pokemonDetail;
      $("#pokedex .pokemon-detail").html(pokemonDetail.render().$el);

      if (callback) { callback(); }
    }
  },

  pokemonIndex: function (callback) {
    var pokemonIndex = new Pokedex.Views.PokemonIndex();
    this._pokemonIndex = pokemonIndex;
    pokemonIndex.refreshPokemon(callback);
    $("#pokedex .pokemon-list").html(pokemonIndex.render().$el);
  },

  toyDetail: function (pokemonId, toyId) {
    if (!this._pokemonDetail) {
      this.pokemonDetail(pokemonId, this.toyDetail.bind(this, pokemonId, toyId));
    }

    if (this._pokemonDetail) {

      this._pokemonDetail.model.fetch({
        success: function () {
           var toy = this._pokemonDetail.model.toys().get(toyId);
           var pokemon = this._pokemonDetail.collection;
           var toyDetail = new Pokedex.Views.ToyDetail(toy, pokemon);
           $("#pokedex .toy-detail").html(toyDetail.render().$el);
         }.bind(this)
      })
    }
  },

  pokemonForm: function () {
  }
});


$(function () {
  new Pokedex.Router();
  Backbone.history.start();
});
