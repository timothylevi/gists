NewAuthDemo.Views.GistFileShow = Backbone.View.extend({

  template: JST["gist_files/show"],

  render: function () {
    this.$el.html(this.template({gist_file: this.model}));
    return this;
  }

});