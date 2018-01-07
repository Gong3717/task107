'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  //var number_a=1;
  //var number_b=5;
  var result=[];
  var temp;
  if(number_a < number_b){
    for(var i = number_a;i<(number_b+1);i++){
       temp=String.fromCharCode(64 + i);
       temp=temp.toLowerCase();
       result.push(temp);

    }
  }
 if(number_a > number_b){
   for(var i = number_a;i>(number_b-1);i--){
    temp=String.fromCharCode(64 + i);
    temp=temp.toLowerCase();
    result.push(temp);
   }
 }

 if(number_a == number_b){
  temp=String.fromCharCode(64 + number_a);
  temp=temp.toLowerCase();
  result.push(temp);
   }
   //console.log(result);
   return result;
}

module.exports = get_letter_interval;
