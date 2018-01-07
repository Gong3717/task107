'use strict';
var rank_desc = function(collection){
  //return [2,3,4,5,6];
  var result=[];
  result= collection.sort(sortNumber());

  return result;
}

module.exports = rank_desc;
function sortNumber(a,b){
  return a-b;
}
