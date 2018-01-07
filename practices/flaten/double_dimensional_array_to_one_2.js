'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result=new Set();
  var temp =[];
  temp=[].concat.apply([],collection);
  var isRepeat;
   for(var i = 0;i<temp.length;i++){
      
        result.add(temp[i]);
     
    }
    result=Array.from(result);
    return result;

  }
module.exports = double_to_one;
