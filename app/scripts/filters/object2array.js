//https://github.com/jdewit/ez-object2array

var app = angular.module('jordanApp');

app.filter('object2array', [function() {
    return function(input) {
      if (Object.prototype.toString.call(input) === '[object Array]') {
        return input;
      }

      var out = [];
      for(var i in input){
        out.push(input[i]);
      }

      return out;
    };
  }])
;
//http://stackoverflow.com/questions/20933561/angularfire-add-in-reverse-order
app.filter('reverse', function() {
      function toArray(list) {
         var k, out = [];
         if( list ) {
            if( angular.isArray(list) ) {
               out = list;
            }
            else if( typeof(list) === 'object' ) {
               for (k in list) {
                  if (list.hasOwnProperty(k)) { out.push(list[k]); }
               }
            }
         }
         return out;
      }
      return function(items) {
         return toArray(items).slice().reverse();
      };
   });
