window.TextSearchSelect = Backbone.View.extend({
  initialize: function(options) {
    this.$el = $(options.div);
    this.$list = $(options.list);

    this.$el.append("<input type='text' id='searchBox'>");
    this.$el.append(this.$list);
  },

  events: {
    "focus #searchBox": "toggleList",
    "blur #searchBox": "toggleList",
    "keyup #searchBox": "filterSearch",
    "click li": "toggleSelected"
  },

  toggleList: function (event) {
    var that = this;
    setTimeout(function() {
      that.$list.toggleClass("hidden");
    }, 100);
  },

  filterSearch: function (event) {
    var filterString = event.target.value;
    var lis = this.$list.children();
    var that = this;

    _.each(lis, function(li) {
      if (filterString === "") {
        $(li).removeClass("hidden");
      }
      else if (!that.filterBoolean(li, filterString)) {
        $(li).addClass("hidden");
      }
    })
  },

  filterBoolean: function (li, filterString) {
    var val = $(li).text();

    return ((val.indexOf(filterString) === 0));
  },

  toggleSelected: function(event) {
    event.preventDefault();

    var data_id = $(event.target).attr("data-id")
    var vals = this.$el.find("input[value='" + data_id + "']")
    if (vals.length) {
      $(vals).remove();
    } else {
      var input = "<input type='hidden' name='gist[tag_ids][]' value='" + data_id + "'>";
      this.$el.append(input);
    };

    setTimeout(function() {
      $(event.target).toggleClass("selected");
    }, 100);
  }

});