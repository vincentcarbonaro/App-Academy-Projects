Pokedex.Views = {}

Pokedex.Views.PokemonIndex = Backbone.View.extend({
  events: {
    'click li': 'selectPokemonFromList'
  },

  initialize: function () {
    this.collection = new Pokedex.Collections.Pokemon();
  },

  addPokemonToList: function (pokemon) {
    this.$el.append(JST["pokemonListItem"]({pokemon: pokemon}))
  },

  refreshPokemon: function (callback) {
    var that = this;
    this.collection.fetch({
      success: function() {
        that.render();
        if(callback){ callback() };
      }
    })
  },

  render: function () {
    var that = this
    that.$el.empty();
    that.collection.each(that.addPokemonToList, that);
    return this;
  },

  selectPokemonFromList: function (event) {
    var id = $(event.currentTarget).data('id');
    var pokemon = this.collection.get(id);
    Backbone.history.navigate("pokemon/" + id, {trigger: true})
    $("#pokedex .toy-detail").empty();
  }
});

Pokedex.Views.PokemonDetail = Backbone.View.extend({
  events: {
    'click .toys li':'selectToyFromList'
  },

  initialize: function (model) {
    this.model = model;
  },

  refreshPokemon: function (options) {
  },

  render: function () {

    this.$el.html(JST["pokemonDetail"]({pokemon: this.model}));
    this.model.fetch( {
      success: function () {
        for (var i = 0; i < this.model.toys().length; i++) {
          var toy = this.model.toys().models[i];
          this.$el.find(".toys").append(JST["toyListItem"]({toy: toy}));
        }
      }.bind(this)
    })
    return this;
  },

  selectToyFromList: function (event) {
    var id = $(event.currentTarget).data('id');

    Backbone.history.navigate(
        "pokemon/" + this.model.get("id") + "/toys/" + id,
        {trigger: true});
  }
});

Pokedex.Views.ToyDetail = Backbone.View.extend({

  initialize: function (model, pokemon) {
    this.model = model;
    this.pokemon = pokemon
  },

  render: function () {
    this.$el.html( JST["toyDetail"]( {toy: this.model, pokemon: this.pokemon } ));
    return this;
  }

});


// $(function () {
//   var pokemonIndex = new Pokedex.Views.PokemonIndex();
//   pokemonIndex.refreshPokemon();
//   $("#pokedex .pokemon-list").html(pokemonIndex.$el);
// });
