NewAuthDemo.Views.GistShow = Backbone.View.extend({

  template: JST["gists/show"],

  render: function () {
    var that = this;
    this.$el.html(this.template({gist: this.model }));
    this.model.gist_files.each( function(gist_file) {
      new NewAuthDemo.Views.GistsForm()
      .addFileShow.call(that, gist_file);
    });

    return this;
  }

});