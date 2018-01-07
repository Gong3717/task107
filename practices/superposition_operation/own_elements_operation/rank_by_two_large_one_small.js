'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  //var collection= [2, 8, 1, 9, 6, 4, 3];
  var result=[];
  var a=collection.length % 3;
  collection=collection.sort((a,b)=>a-b);
  console.log(collection);
  if(a==0){
    for(var i=0;i<collection.length;){
      result.push(collection[i+1]);
      result.push(collection[i+2]);
      result.push(collection[i]);
      i=i+3;
    }
  }else if(a==1){
    for(var i=0;i<collection.length-2;){
      result.push(collection[i+1]);
      result.push(collection[i+2]);
      result.push(collection[i]);
      i=i+3;
    }
    result.push(collection[collection.length-1]);
  }else{
    for(var i=0;i<collection.length-2;){
      result.push(collection[i+1]);
      result.push(collection[i+2]);
      result.push(collection[i]);
      i=i+3;
    }
    result.push(collection[collection.length-2]);
    result.push(collection[collection.length-1]);
  }

  return result;
console.log(result);
}
module.exports = rank_by_two_large_one_small;
// function sortNumber(a,b){
//     return a-b;
// }
