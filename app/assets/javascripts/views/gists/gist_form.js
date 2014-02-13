NewAuthDemo.Views.GistsForm = Backbone.View.extend({
  tagName: "form",
  className: "gist-form",
  template: JST["gists/form"],

  partialCount: 0,

  render: function() {
    var that = this;
    this.$el.html(this.template({gist: this.model }));
    this.model.gist_files.each( function(gist_file) {
      that.addFileShow(gist_file);
    });

    var $tagDiv = this.$el.find("#tagDiv");
    var $tagUl = this.$el.find("#tagUl");

    var tss = new TextSearchSelect({div: $tagDiv, list: $tagUl})

    return this;
  },

  events: {
    "submit": "submitForm",
    "click #addFile": "handleAddFileEvent"
  },

  submitForm: function (event) {
    event.preventDefault();

    var formData = $($(event.target)[0]).serializeJSON();
    console.log(formData);

    if (this.model.isNew()) {
      NewAuthDemo.gists.create(formData)
    } else {
      this.model.save(formData);
    };
  },

  handleAddFileEvent: function(event) {
    event.preventDefault();

    var gist_file = new NewAuthDemo.Models.GistFile();
    this.addFilePartial(gist_file);
  },

  addFilePartial: function(gist_file) {
    var gistFileForm = new NewAuthDemo.Views.GistFileForm({ counter: this.partialCount, model: gist_file })
    this.partialCount += 1;
    this.$el.append(gistFileForm.render().$el.html())
  },

  addFileShow: function(gist_file) {
    var gistFileForm = new NewAuthDemo.Views.GistFileShow({ model: gist_file })
    this.$el.append(gistFileForm.render().$el.html())
  }


});
