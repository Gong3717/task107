'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result=new Set();
   for(var i = 0;i<collection_a.length;i++){
      
        result.add(collection_a[i]);
     
    }
    for(var j = 0;j<collection_b.length;j++){
      
        result.add(collection_b[j]);
     
    }
    result=Array.from(result);
    return result;
}

module.exports = get_union;

