TrelloClone.Views.NewBoard = Backbone.View.extend({

  template: JST['boards/new_board'],

  events: {
    'submit .board': 'submit_form',
  },

  render: function () {
    var content = this.template( { } );
    this.$el.html(content);
    return this;
  },

  submit_form: function (event) {
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON()["board"]
    var newBoard = new TrelloClone.Models.Board(params);
    newBoard.save( {}, {
      success: function () {
        TrelloClone.Collections.boards.add(newBoard, { merge: true });
        Backbone.history.navigate("", { trigger: true })
      }
    })
  },

})
