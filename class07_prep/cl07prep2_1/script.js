      var colors = [{name : 'Tammy', color : 'blue'}, {name : 'Joe', color : 'green'}, {name : 'Tamika', color : 'red'}, {name : 'Tom', color : 'yellow'}];

      function myFunction(item, index) {
        var results = document.getElementById('results');
        results.innerHTML = results.innerHTML + item.name + '\'s favorite color is ' + item.color + '.<br>';
      }

      var who = colors.forEach(myFunction);

      console.log(who);
