NewAuthDemo.Views.GistFileForm = Backbone.View.extend({
  tagName: "form",
  className: "edit-file-form",

  initialize: function (options) {
    this.counter = options.counter;
  },

  events: {
    "submit": "handleFileSave"
  },

  template: JST["gist_files/form_part"],

  render: function () {
    this.$el.html(this.template({counter: this.counter, gist_file: this.model }));
    return this
  },

  handleFileSave: function(event) {
    event.preventDefault();

    var formData = $($(event.target)[0]).serializeJSON();
    console.log(formData);

    this.model.save(formData);

    }

})