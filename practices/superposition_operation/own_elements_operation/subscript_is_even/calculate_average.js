'use strict';
var calculate_average = function(collection){

    var result=0;
    var count=0;
    for(var i=0;i<collection.length;i++){
      if(i%2!=0){
        result+=collection[i];
        count++;
      }
    }
    return (result/count);

};
module.exports = calculate_average;
