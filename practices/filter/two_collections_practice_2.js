'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  /*var result=[];
  var isRepeat;
  for(var i =0;i<collection_a.length;i++){
    isRepeat=false;
    for(var j =0;j<collection_b.length;j++){
      if(collection_a[i]==collection_b[j]){
        isRepeat=true;
      }
    }
    if(!isRepeat){
      result.push(collection_a[i]);
    }
  }*/
  var result = collection_a.filter(function(item,index,arry){
    return !(collection_b.indexOf(item)>-1);
  });
  return result;
}

module.exports = choose_no_common_elements;
