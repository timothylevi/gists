NewAuthDemo.Views.GistsIndex = Backbone.View.extend({
  tagName: "ul",

  render: function() {
    var that = this;
    this.collection.each(function(gist) {
      var view = new NewAuthDemo.Views.GistsList({model: gist})
      that.$el.append(view.render().$el);
    })
    this.$el.prepend('<a href="#/gists/new">Create New Gist</a>')
    return this;
  },

  events: {
    "click button" : "favorite"
  },

  favorite: function (event) {
    event.preventDefault();

    var gist = this.getGistByEvent(event);
    gist.toggleFavorite();
    $(event.currentTarget).closest("p").toggleClass("can-favorite");
  },

  getGistByEvent: function (event) {
   var id = $(event.currentTarget).closest("li").attr("data-id");
   return NewAuthDemo.gists.get(id);
  }
});
