TrelloClone.Views.ListShow = Backbone.View.extend({

  tagName: "li",

  template: JST['lists/list_show'],

  initialize: function (options) {
    this.list = options.model
  },

  render: function () {
    var content = this.template({
      list: this.list
    });
    this.$el.html(content);
    return this;
  }

})
