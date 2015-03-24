TrelloClone.Views.ListNew = Backbone.View.extend({

  template: JST['lists/list_new'],

 events: {
    'submit .list': 'submit_form',
  },

  initialize: function (options) {
    this.lists = options.lists;
    this.listenTo(this.lists, 'sync change', this.render);
  },

  render: function () {
    var content = this.template({
    });
    this.$el.html(content);
    return this;
  },

  submit_form: function (event) {
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON()["list"]
    var list = new TrelloClone.Models.List(params);
    var that = this;
    list.set({ board_id: this.lists.board.id });

    list.save( {}, {
      success: function () {
        that.lists.add(list);
      },
      error: function (){
        console.log("fail");
      }
    })
  },

})
