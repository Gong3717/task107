'use strict';
var single_element = function(collection){
//var collection = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
    var result=[];
    var temp=[];
    for(var i =1;i<collection.length;){
        temp.push(collection[i]);
        i=i+2;
    }
   // console.log(temp);
    for(var a=0;a<temp.length;a++){
      var count = 0;
      for(var j=0;j<temp.length;j++){
        if(temp[a]==temp[j]){
           count++;
        }
       // console.log(count);
      }
      if(count==1){
        result.push(temp[a]);
      }

    }
     //console.log(result);
    return result;
};
module.exports = single_element;
