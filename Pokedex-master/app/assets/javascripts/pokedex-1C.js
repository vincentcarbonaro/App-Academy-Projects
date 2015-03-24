Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var that = this;

  this.pokes.create(attrs, {
    success: function(data){
      that.addPokemonToList(data);
      that.$newPoke.trigger("reset");
      callback(data);
    },
    error: function(){
      console.log("fail!");
    }
  });

};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  var that = this;
  this.$newPoke.on("click", "button", function(event) {
    event.preventDefault();
    that.createPokemon(that.$newPoke.serializeJSON(), that.renderPokemonDetail.bind(that));
  })

};
