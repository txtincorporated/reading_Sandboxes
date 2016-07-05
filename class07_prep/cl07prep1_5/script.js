      var colors = [tammy = {name : 'Tammy', color : 'blue'}, joe = {name : 'Joe', color : 'green'}, tamika = {name : 'Tamika', color : 'red'}, tom = {name : 'Tom', color : 'yellow'}];

      var who = colors.filter(function(ele) {return ele.name.length > 3;});

      console.log(who);
