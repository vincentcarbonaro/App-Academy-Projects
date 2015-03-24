Pokedex.RootView.prototype.addToyToList = function (toy) {

  var details = "<li><ul>"

  for (var attribute in toy.attributes) {
    if (attribute === "image_url" ||
        attribute === "id" ||
        attribute === "pokemon_id")
         continue;
    details += "<li>" + attribute + ": " + toy.get(attribute) + "</li>";
  }

  details += "</ul></li>"

  var image = this.renderToyDetail(toy);

  var dropdownBox = "<select data-old-poke-id=" + toy.get("pokemon_id") +
                        " name=\"pokemonId\" data-toy-id=" + toy.id + "> ";

  for(var i = 0; i < this.pokes.models.length; i++){

    if (toy.get("pokemon_id") === i + 1) {
      dropdownBox += "<option value=" + this.pokes.models[i].id +
                    " selected> " + this.pokes.models[i].get("name") + " </option>"
    } else {
      dropdownBox += "<option value=" + this.pokes.models[i].id +
                      "> " + this.pokes.models[i].get("name") + " </option>"
    }
  }

  dropdownBox += " </select>";

  this.$toyDetail.append("<section data-id=" + toy.id +
                " data-pokemon-id=" + toy.escape("pokemon_id") + " >" +
                details + image + dropdownBox + "</section>");

};

Pokedex.RootView.prototype.renderToyDetail = function (toy) {

  var img = "<img src=" + toy.escape("image_url") + ">"

  return img;

};

Pokedex.RootView.prototype.selectToyFromList = function (event) {

  var that = this;

  that.$toyDetail.on("click", "section", function(event) {
    var $li = $(event.currentTarget);
    var id  = $li.data("id");
    var pokemonId = $li.data("pokemon-id");
    var pokemon = that.pokes.get(pokemonId);

    pokemon.toys().get(id);

  })

};

Pokedex.RootView.prototype.reassignToy = function (event) {
  var that = this;
  this.$toyDetail.on("change", "select", function(event) {
    var $select = $(event.currentTarget);
    var toyID = $select.data("toy-id");
    var selectedPokemonId = $select.val();
    var oldPokeId = $select.data("old-poke-id");
    console.log("oldPokeId", oldPokeId);
    console.log("toyID", toyID);
    console.log("selectedPokemonId", selectedPokemonId);

    // this.pokes


  })

}
