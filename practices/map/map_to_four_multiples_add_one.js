'use strict';
var map_to_four_multiples_add_one = function(collection){
 // return [5,9,13,17,21];
  var result=collection.map(function(item,index,array){
    return item *4 +1;
  });
  return result;
};

module.exports = map_to_four_multiples_add_one;
