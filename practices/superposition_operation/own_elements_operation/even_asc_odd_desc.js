'use strict';
var even_asc_odd_desc = function(collection){
  var result=[];
  var temp1=[];
  var temp2=[];
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2==0){
      temp1.push(collection[i]);
    }
    else{
      temp2.push(collection[i]);
    }
  }
  temp1.sort(sortNumber);
  temp2.sort(sortNumber1);
  //console.log(temp1);
  //console.log(temp2);
  result=temp1.concat(temp2);
  //console.log(result);
  return result;
 
};
module.exports = even_asc_odd_desc;

function sortNumber(a,b){
  return a-b;
}
function sortNumber1(a,b){
  return b-a;
}
