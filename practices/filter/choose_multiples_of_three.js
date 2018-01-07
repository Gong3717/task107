'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  /*var result=[];
  for(var i =0;i<collection.length;i++){
    if(collection[i]%3===0){
      result.push(collection[i]);
    }
  }*/
  var result=collection.filter(function(item,index,arry){
    return (item % 3==0)
  });
  //console.log(result);
  return result;
  return result;
}

module.exports = choose_multiples_of_three;
