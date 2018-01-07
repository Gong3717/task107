'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result=[];
  result=[].concat.apply([],collection);
 // result.push(collection[0]);
 // result.push(collection[1][0]);
 // result.push(collection[2][0]);
 // result.push(collection[2][1]);
  return result;
}

module.exports = double_to_one;
