Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  this.$pokeList.append("<li data-id='" + pokemon.id + "' class='poke-list-item'>" +
          pokemon.escape("name") + " (" + pokemon.escape("poke_type") + ")</li>");
};

Pokedex.RootView.prototype.refreshPokemon = function (callback) {

  var that = this;
  this.pokes.fetch({

    success: function(){
      for(var i = 0; i < that.pokes.models.length; i++){
        that.addPokemonToList(that.pokes.models[i]);
      }
    }

  })

};
