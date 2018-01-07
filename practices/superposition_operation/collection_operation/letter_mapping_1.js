'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var result=[];
  var temp;
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2==0){
      temp=String.fromCharCode(65 + i);
      temp=temp.toLowerCase();
      result.push(temp);
    }
  }
   return result;
}

module.exports = even_to_letter;
