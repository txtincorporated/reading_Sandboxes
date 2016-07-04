      var colors = [tammy = {name : 'Tammy', color : 'blue', height : 173}, joe = {name : 'Joe', color : 'green', height : 177}, tamika = {name : 'Tamika', color : 'red', height : 162}, tom = {name : 'Tom', color : 'yellow', height : 170}];
      console.log('Hi');
      var who = colors.sort(function(a,b) {return a.height-b.height;});

      console.log(who);
