// Sandbox for class07_prep
var ancestry =  $.getJSON('ancestry.js');

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(byName['Philibert Haverbeke']);
// → {name: "Philibert Haverbeke", …}
