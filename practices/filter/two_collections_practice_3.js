'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var result=[];
  for(var i =0;i<collection_a.length;i++){
    for(var j =0;j<collection_b.length;j++){
      if(collection_a[i]%collection_b[j]==0){
        result.push(collection_a[i]);
      }
    }
  }
  //var collection_a = [4,7,9,25,16,21,64,32,35,49];
  //var collection_b = [2,3,5];
  /*var result = collection_a.filter(function (item) {
    var temp = collection_b.filter(function (item1,index) {
      return (item % item1 == 0);
    });
    return (temp.length >0);
  });*/
  return result;
}
module.exports = choose_divisible_integer;
