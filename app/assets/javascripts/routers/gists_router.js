NewAuthDemo.Routers.Gists = Backbone.Router.extend({

  initialize: function($rootEl) {
    this.$rootEl = $rootEl
  },

  routes: {
    "" : "index",
    "gists/new": "new",
    "gists/:gist_id/gist_files/:id/edit": "fileEdit",
    "gists/:id/edit": "edit",
    "gists/:id": "show"
  },

  index: function () {
    var gistIndexView = new NewAuthDemo.Views.GistsIndex(
      { collection: NewAuthDemo.gists });
    this._swapView(gistIndexView);
  },

  new: function () {
    var gist = new NewAuthDemo.Models.Gist();
    var view = new NewAuthDemo.Views.GistsForm({model: gist});
    this._swapView(view);
  },

  edit: function(id) {
    var gist = NewAuthDemo.gists.get(id)
    var view = new NewAuthDemo.Views.GistsForm({model: gist});
    this._swapView(view);
  },

  show: function(id) {
    var gist = NewAuthDemo.gists.get(id)
    var view = new NewAuthDemo.Views.GistShow({model: gist});
    this._swapView(view);
  },

  fileEdit: function (gist_id, id) {
    var gist = NewAuthDemo.gists.get(gist_id);
    var file = gist.gist_files.get(id);
    var view = new NewAuthDemo.Views.GistFileForm({model: file});
    this._swapView(view);
  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }

});
