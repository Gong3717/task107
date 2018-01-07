'use strict';
var number_map_to_word_over_26 = function(collection){
  //return ['a','m','aa','ad','y','aa'];
  var result=collection.map(function(item,index,array){
    if(item<=26){
      var temp=String.fromCharCode(64 + item);
      temp=temp.toLowerCase();
      return temp;
    }else{
      var temp=String.fromCharCode(64 + 1)+String.fromCharCode(64 + item-26);
      temp=temp.toLowerCase();
      return temp;
    }

  });
  return result;
};

module.exports = number_map_to_word_over_26;
