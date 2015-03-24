Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {

  var that = this;

  var image = "<div class='detail'><img src=" + pokemon.escape("image_url") + "></div>";

  var details = "<ul>"

    for (var attribute in pokemon.attributes) {
        if (attribute === "image_url") continue;
        details += "<li>" + attribute + ": " + pokemon.get(attribute) + "</li>";
      }

      //emptys previous toy contents
    this.$toyDetail.html("");

    pokemon.fetch({
      success: function(){
        for(var i = 0; i < pokemon.toys().models.length; i++){
          that.addToyToList(pokemon.toys().models[i]);
        }
      }
    })

  details += "</ul>";

  this.$pokeDetail.html(image + details);

};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var that = this;
  that.$pokeList.on("click", "li", function(event) {
    var $li = $(event.currentTarget);
    var id  = $li.data("id");
    var pokemon = that.pokes.get(id);
    that.renderPokemonDetail(pokemon);
  })
};




// this.$el = $el;
// this.pokes = new Pokedex.Collections.Pokemon();
// this.$pokeList = this.$el.find('.pokemon-list');

// this.$pokeDetail = this.$el.find('.pokemon-detail');

// this.$newPoke = this.$el.find('.new-pokemon');
// this.$toyDetail = this.$el.find('.toy-detail');
