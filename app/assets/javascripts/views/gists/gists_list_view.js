NewAuthDemo.Views.GistsList = Backbone.View.extend({
  tagName: "li",

  template: JST['gists/list'],

  render: function() {
    this.$el.attr("data-id", this.model.id)
    this.$el.html(this.template({ gist: this.model }));
    return this;
  }

});
