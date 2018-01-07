'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result=[];
 // var number_a=20;
  //var number_b=53;

  var temp;
  if(number_a < number_b){
   // var s=Math.floor(number_b/26);
   // console.log(s);
    for(var i = number_a;i<(number_b+1);i++){
      if(i<=26){
        temp=String.fromCharCode(64 +i);
        temp=temp.toLowerCase();
        result.push(temp);
      }
     /* for(var j=1;j<=s;j++){
      if(i>26*j){
          temp=String.fromCharCode(64 +j)+String.fromCharCode(64 + i-26*j);
          temp=temp.toLowerCase();
          result.push(temp);
        }
      }*/

      else if(i<=52){
        temp=String.fromCharCode(64 +1)+String.fromCharCode(64 + i-26);
        temp=temp.toLowerCase();
        result.push(temp);
      }else{
        temp=String.fromCharCode(64 +2)+String.fromCharCode(64 + i-52);
        temp=temp.toLowerCase();
        result.push(temp);
      }
    }
  }
 if(number_a > number_b){
   for(var i = number_a;i>(number_b-1);i--){
     if(i<=26){
       temp=String.fromCharCode(64 + i);
       temp=temp.toLowerCase();
       result.push(temp);
     }else if(i<=52){
       temp=String.fromCharCode(64 +1)+String.fromCharCode(64 + i-26);
       temp=temp.toLowerCase();
       result.push(temp);
     }else{
       temp=String.fromCharCode(64 +2)+String.fromCharCode(64 + i-52);
       temp=temp.toLowerCase();
       result.push(temp);
     }

   }
 }

 if(number_a == number_b){
   if(number_a<=26){
     temp=String.fromCharCode(64 + number_a)+String.fromCharCode(64 + number_a);
     temp=temp.toLowerCase();
     result.push(temp);
   }else if(number_a<=52){
     temp=String.fromCharCode(64 +1)+String.fromCharCode(64 + number_a-26);
     temp=temp.toLowerCase();
     result.push(temp);
   }else{
     temp=String.fromCharCode(64 +2)+String.fromCharCode(64 + number_a-52);
     temp=temp.toLowerCase();
     result.push(temp);
   }

   }
   return result;
//console.log(result);
}

module.exports = get_letter_interval_2;

