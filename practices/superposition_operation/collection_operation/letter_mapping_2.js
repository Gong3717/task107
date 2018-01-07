'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var result=0;
  var sum=0;
  var ave=0;
  for(var i=0;i<collection.length;i++){
     sum+=collection[i]; 
  }
  ave=Math.ceil(sum/collection.length); 
  result=String.fromCharCode(64 + ave);
  result=result.toLowerCase();
 
   return result;
}

module.exports = average_to_letter;

