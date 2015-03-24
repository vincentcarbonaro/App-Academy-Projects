TrelloClone.Views.BoardShow = Backbone.View.extend({

  template: JST["boards/board_show"],

  events: {
    'click .delete_board': 'delete',
    'click button.new_list': 'new_list_form'
  },

  initialize: function (options) {
    this.board = options.model;
    this.listenTo(this.board, 'sync', this.render);
    this.listenTo(this.board.lists(), 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      model: this.board
    });

    this.$el.html(content);

    this.board.lists().each( function (list) {
      var view = new TrelloClone.Views.ListShow({
        model: list
      });
      this.$(".lists").append(view.render().$el)
    })

    return this;
  },

  delete: function () {
    this.board.destroy({
      success: function () {
        TrelloClone.Collections.boards.remove(this.board);
        Backbone.history.navigate("", { trigger: true })
      }
    })
  },

  new_list_form: function () {
    var view = new TrelloClone.Views.ListNew({
      lists: this.board.lists(),
    });
    this.$("div.new").html(view.render().$el);
    return this;
  },

})
