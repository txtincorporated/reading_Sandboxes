var objArray = [];

function Goldfish(name, gills, tail, poop) {
  this.name = name,
  this.gills = gills,
  this.tail = tail,
  this.poop = poop;
}

fishies = [['Dobie','silver','bifurcated','stringy'], ['Gawain','gold','single','pellets'], ['Porschia','white','frilly','segments']];

var fishTank = function() {
  for (var i=0; i<fishies.length; i++) {
    var pesce = new Goldfish(fishies[i][0],fishies[i][1],fishies[i][2],fishies[i][3]);
    objArray.push(pesce);
  }
};
fishTank();
console.log(objArray);

var argleNauts = JSON.stringify(objArray,null,2);
console.log(argleNauts);

$.getJSON('myData.json').done(bonVoyage).fail(function() {
  console.log('Goldie is dead');
});

function bonVoyage(data) {

};
