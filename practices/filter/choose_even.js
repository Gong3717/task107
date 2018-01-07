'use strict';

function choose_even(collection) {
 //var collection = [0, 1, 2, 3, 4, 6];
  //在这里写入代码
  /*var result=[];
  for(var i =0;i<collection.length;i++){
    if(collection[i]%2===0){
      result.push(collection[i]);
    }
  }*/
  var result=collection.filter(function(item,index,arry){
    return (item % 2==0)
  });
  //console.log(result);
  return result;
}

module.exports = choose_even;
