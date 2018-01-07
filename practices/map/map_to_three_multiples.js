'use strict';
var map_to_three_multiples = function(collections){
  //return [3,9,15,12,27];
  var result=collections.map(function(item,index,array){
    return item *3;
  });
  return result;
};

module.exports = map_to_three_multiples;
