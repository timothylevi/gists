NewAuthDemo.Models.Gist = Backbone.Model.extend({

  initialize: function () {
    this.parseFiles(this.get("gist_files"));
  },

  parseFiles: function (array) {
    this.gist_files = new NewAuthDemo.Collections.GistFiles (array);
  },

  toggleFavorite: function () {
    this.save({
      "favorite": !this.get("favorite")
    })
  }

});
