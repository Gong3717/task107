'use strict';
function one_add_next_multiply_three(collection){
  var result=[];
  var temp;
  for(var i=0;i<collection.length;i++){
    if(i<collection.length-1){
      temp=(collection[i]+collection[i+1])*3
      result.push(temp);
    }
  }
  //console.log(result);
  return result;
  //return [12,24,36,48,60,72,84,96,108,120];
}
module.exports = one_add_next_multiply_three;
