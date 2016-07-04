      var colors = ['{"name" : "Tammy", "color" : "blue"}', '{"name" : "Joe", "color" : "green"}', '{"name" : "Tamika", "color" : "red"}', '{"name" : "Tom", "color" : "yellow"}'];

      console.log('Colors before push():  ' + colors);

      colors.push('{"name" : "Vernal", "color" : "topaz"}');

      console.log('Colors after push():  ' + colors);

      console.log('Colors before pop():  ' + colors);

      colors.pop();

      console.log('Colors after pop():  ' + colors);

      console.log('Colors before shift():  ' + colors);

      colors.shift();

      console.log('Colors after shift():  ' + colors);

      console.log('Colors before unshift():  ' + colors);

      colors.unshift('{"name" : "Vernal", "color" : "topaz"}');

      console.log('Colors after unshift():  ' + colors);
