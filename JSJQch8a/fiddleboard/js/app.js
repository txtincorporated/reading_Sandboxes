var x = {
  bigness:'large',
  boldness: 'max',

  annamethod4U: function() {
    return 'Good Luck, Max!';
  }
};
console.log(x.annamethod4U());
$('header#bonVoyage').html('<span>' + x.annamethod4U() + '</span>');
