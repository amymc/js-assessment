exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var duplicates = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i - 1]) {
        duplicates++;
      } else {
        duplicates = 0;
      }
      if (duplicates >= amount) {
        str = str.slice(0, i) + str.slice(i + 1);
        i--;

      }
    }
    return str;
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

  }
};
