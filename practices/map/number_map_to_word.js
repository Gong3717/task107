'use strict';
var number_map_to_word = function(collection){
  //return ['a','b','c','d','e'];
  var result=collection.map(function(item,index,array){
    var temp=String.fromCharCode(64 + item);
    temp=temp.toLowerCase();
    return temp;
  });
  return result;
};

module.exports = number_map_to_word;
