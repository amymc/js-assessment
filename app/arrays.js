exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum: function(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total = total + arr[i];
    }
    return total;
  },

  remove: function(arr, item) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        results.push(arr[i]);
      }
    }
    return results;
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
