'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  //var number=0.8;
  //var interval=0.2;
  var result=[];
  //var a = (10*number) % (10*interval);
  //console.log(a);
  if(number % interval == 0){
    while(number>0){
      result.push(Math.round(number*100) /100);
      number=number-interval;
    }
  }else{
    for(var i =0;;i++){
      result.push(Math.round(number*100)/100);
      number=number-interval;
      if(number<0){
        result.push(Math.round(number*100)/100);
        break;
      }
    }
  }
   // console.log(result);
  return result;
}

module.exports = spilt_to_zero;
