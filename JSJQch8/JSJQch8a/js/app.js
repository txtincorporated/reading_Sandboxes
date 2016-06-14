//var strings = [];
var x = {
  bigness:'large',
  boldness: 'max',

  annamethod4U: function() {
    // var xString = JSON.stringify(this);
    // strings.push(xString);
    var message = 'Good Luck, Max!';
    return message;
  }
};
console.log(x.annamethod4U());
$('header#bonVoyage').toHtml('<span>' + x.annamethod4U() + '</span>');

//Special thx to https://gist.github.com/cowboy/3749767 for this cheesey stunt
// var stringify = function(obj, prop) {
//   var placeholder = '____PLACEHOLDER____';
//   var fns = [];
//   var json = JSON.stringify(obj, function(key, value) {
//     if (typeof value === 'function') {
//       fns.push(value);
//       return placeholder;
//     }
//     return value;
//   }, 2);
//   json = json.replace(new RegExp('"' + placeholder + '"', 'g'), function(_) {
//     return fns.shift();
//   });
//   return 'this ["' + prop + '"] = ' + json + ';';
// };
//
// strings.push(stringify(x, 'x'));

var newString = JSON.stringify(x);
var nextString = newString.replace(/boldness/, 'badness');
var y = JSON.parse(nextString);
