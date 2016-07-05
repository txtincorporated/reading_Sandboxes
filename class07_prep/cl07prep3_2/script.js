function hofMan() {
  return function G(a,b) {
    return a + b;
  };
};

var nexty = hofMan();

console.log(nexty(3,5));//Why on earth does it not  work if you just log hofMan with the same values passed to it?!
