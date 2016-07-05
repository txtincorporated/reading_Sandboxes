      var capitals = [{predicate : 'capital city', owner : 'France', identity : 'Paris'}, {predicate : 'capital city', owner : 'Germany', identity : 'Berlin'}, {predicate : 'capital city', owner : 'England', identity : 'London'}, {predicate : 'capital city', owner : 'Spain', identity : 'Madrid'}];

      var misc = [{predicate : 'square root', owner : '9', identity : '3'}, {predicate : 'product', owner : '2 and 5', identity : '10'}, {predicate : 'king', owner : 'Spain', identity : 'Felipe IV'}, {predicate : 'enemy', owner : 'my enemy', identity : 'my friend'}, {predicate : 'importance', owner : 'being earnest', identity : 'not to be underestimated'}];

      function G(item) {
        var results = document.getElementById('results');
        results.innerHTML = results.innerHTML + 'The ' + item.predicate + ' of ' + item.owner + ' is ' + item.identity + '.<br>';
      }

      var who = function(array) {
        return array.map(G);
      };
      who(capitals);
      who(misc);
