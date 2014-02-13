window.NewAuthDemo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(context) {
    NewAuthDemo.gists = new NewAuthDemo.Collections.Gists ();
    NewAuthDemo.favorites = new NewAuthDemo.Collections.Favorites();
    NewAuthDemo.tags = new NewAuthDemo.Collections.Tags();

    NewAuthDemo.gists.fetch(
      {success: function () {

        NewAuthDemo.favorites.fetch({
          success: function() {

            NewAuthDemo.tags.fetch({
              success: function() {
                new NewAuthDemo.Routers.Gists(context);
                Backbone.history.start();
              }
            })
          }
        })
      }
    });
  }
};
