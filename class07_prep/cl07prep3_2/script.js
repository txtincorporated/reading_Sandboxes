      var capitals = [{country : 'France', capital : 'Paris'}, {country : 'Germany', capital : 'Berlin'}, {country : 'England', capital : 'London'}, {country : 'Spain', capital : 'Madrid'}];

      function G(item, prompt) {
        var results = document.getElementById('results');
        results.innerHTML = results.innerHTML + 'The ' + prompt[0] + ' of ' + item.country + ' is ' + item.capital + '.<br>';
      }

      var who = function(array) {
        return array.forEach(G);
      };
      who(capitals, 'capital');
