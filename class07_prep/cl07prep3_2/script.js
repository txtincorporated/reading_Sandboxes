      var capitals = [{owner : 'France', predicate : 'Paris', significance : 'capital city'}, {owner : 'Germany', predicate : 'Berlin', significance : 'capital city'}, {owner : 'England', predicate : 'London', significance : 'capital city'}, {owner : 'Spain', predicate : 'Madrid', significance : 'capital city'}];

      var examples = [{owner : '9', predicate : '3', significance : 'square root'}, {owner : '2 and 5', predicate : '10', significance : 'product'}, {owner : 'Spain', predicate : 'Felipe IV', significance : 'king'}, {owner : 'being earnest', predicate : 'not to be underestimated', significance : 'importance'}];

      function G(item) {
        var results = document.getElementById('results');
        results.innerHTML = results.innerHTML + 'The ' + item.significance + ' of ' + item.owner + ' is ' + item.predicate + '.<br>';
      }

      var who = function(array) {
        return array.map(G);
      };
      who(capitals);
      who(examples);
