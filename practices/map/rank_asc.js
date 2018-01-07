'use strict';
var rank_asc = function(collection){
  //return [6,5,4,3,2];
  //var collection = [3, 2, 4, 5, 6];
  var result=[];
  result= collection.sort(function(a,b){
    return b-a;
  })

 // console.log(result);
  return result;
 }
 module.exports = rank_asc;

