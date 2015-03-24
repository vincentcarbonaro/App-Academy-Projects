TrelloClone.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": 'index',
    "boards/new": 'new',
    "boards/:id": 'show',
  },

  index: function () {
    TrelloClone.Collections.boards.fetch();
    var view = new TrelloClone.Views.BoardsIndex();
    this._swapView(view)
  },

  new: function () {
    var newModel = new TrelloClone.Models.Board();
    var view = new TrelloClone.Views.NewBoard( { model: newModel } );
    this._swapView(view)
  },

  show: function (id) {
    var board = TrelloClone.Collections.boards.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow( { model: board });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

})
