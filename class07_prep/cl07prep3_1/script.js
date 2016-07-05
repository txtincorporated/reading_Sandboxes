      var capitals = [{country : 'France', capital : 'Paris'}, {country : 'Germany', capital : 'Berlin'}, {country : 'England', capital : 'London'}, {country : 'Spain', capital : 'Madrid'}];

      function F(item) {
        var results = document.getElementById('results');
        results.innerHTML = results.innerHTML + 'The capital of ' + item.country + ' is ' + item.capital + '.<br>';
      }

      var who = function(array) {
        return array.forEach(F);
      };
      who(capitals);
