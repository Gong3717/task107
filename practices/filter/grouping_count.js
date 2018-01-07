'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var collection = [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2];
  var result= {};
  var filterresult = collection.filter(function(item,index,arry){
    if(result[item]){
      result[item]++;
    }
    else{
      result[item]=1;
    }
    });

 //console.log(result);

  return result;

}

module.exports = grouping_count;
