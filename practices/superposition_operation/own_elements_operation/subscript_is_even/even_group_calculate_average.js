'use strict';
var even_group_calculate_average = function(collection){
//var collection = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
//var collection = [1, 3, 5, 7, 33, 55, 31, 555, 777];
//var collection = [344, 256, 55, 777, 322, 180];
var temp=[];
var temp1=[];
var result=[];
var count1=0;
var count2=0;
var count3=0;
var sum1=0;
var sum2=0;
var sum3=0;
var sum=0;
for(var i=1;i<collection.length;){
  temp.push(collection[i]);
  i=i+2;
}
//console.log(temp);
if(is_even(temp)==0){
  result= [0];
}else{
  for(var j=0;j<temp.length;j++){
    if(temp[j]%2==0){
      temp1.push(temp[j]);
    }
  }
 // console.log(temp1);
  if(is_hundred(temp1)==temp1.length){
    for (var a = 0; a < temp1.length; a++){
       sum+=temp1[a];
    }
    result.push(sum/temp1.length);
  }
  else {
    for (var t = 0; t < temp1.length; t++) {
      if (temp1[t] < 10) {
        sum1 += temp1[t];
        count1++;
      }
      else if (temp1[t] < 100) {
        sum2 += temp1[t];
        count2++;
      }
      else {
        sum3 += temp1[t];
        count3++;
      }
    }
    result.push(sum1/count1,sum2/count2,sum3/count3);
  }
}

//console.log(result);
return result;
};
module.exports = even_group_calculate_average;
function is_even(colllction){
  var count =0;
  for (var i=0;i<colllction.length; i++) {
    if(colllction[i] % 2 == 0){
      count++;
    }

  }
  return count;
}
function is_hundred(colllction){
  var count =0;
  for (var i=0;i<colllction.length; i++) {
    if(colllction[i] >100){
      count++;
    }

  }
  return count;
}

