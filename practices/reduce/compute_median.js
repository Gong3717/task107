'use strict';

function compute_median(collection) {
  //在这里写入代码
  var ary = collection.sort(function (a,b) {
  return a - b;
  });
  if(ary.length%2==0){
    var lowMiddle = Math.floor((ary.length - 1) / 2);
    var highMiddle = Math.ceil((ary.length - 1) / 2);
    return (ary[lowMiddle]+ ary[highMiddle]) / 2;
  }
  if(ary.length%2!=0){
    var Middle = ((ary.length - 1) / 2);
    return (ary[Middle]);
  }
}

module.exports = compute_median;


