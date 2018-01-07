'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
//var collection = [1, 1, 1, 2, 2, 3, 4];
  /*var result=[];
  var isRepeat;
  for(var i = 0;i<collection.length;){
    var count = 0;
    isRepeat=false;
    for(var j=i;j<collection.length;j++){
      if(collection[i]==collection[j]){
        isRepeat=true;
        count++;
      }
    }
    result.push(collection[i]);
    i+=count;
    if(!isRepeat){
      result.push(collection[i]);
    }
  }*/
  var result=collection.filter(function(item,index,array){
    return array.indexOf(item) === index;//判断元素是不是第一次出现
  });
  //console.log(result);
  return result;
}

module.exports = choose_no_repeat_number;
