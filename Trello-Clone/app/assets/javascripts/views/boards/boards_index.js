TrelloClone.Views.BoardsIndex = Backbone.View.extend({

  template: JST['boards/boards_index'],

  initialize: function () {
    this.listenTo(TrelloClone.Collections.boards, 'sync', this.render)
  },

  render: function () {
    var content = this.template( { boards: TrelloClone.Collections.boards } );
    this.$el.html(content);
    return this;
  }

})
