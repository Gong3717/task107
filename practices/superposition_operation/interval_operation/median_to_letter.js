'use strict';

function median_to_letter(collection) {

  //在这里写入代码
/*
 var collection = [20,21,22,23,24,25,26,27,28,29,
  30,31,32,33,34,35,36,37,38,39,
  40,41,42,43,44,45,46,47,48,49,
  50,51,52,53];*/
 var result;
 var i,temp;
 var length=collection.length;
 if(length%2==0){

   collection=collection.sort(sortNumber);
   var lowmedian=collection[collection.length/2-1];
   var highmedian=collection[collection.length/2];
   i=Math.ceil((lowmedian+highmedian)/2);
   if(i<=26){
     temp=String.fromCharCode(64 + i);
     temp=temp.toLowerCase();
     result=temp;
   }else if(i<=52){
     temp=String.fromCharCode(64 +1)+String.fromCharCode(64 + i-26);
     temp=temp.toLowerCase();
     result=temp;
   }else{
     temp=String.fromCharCode(64 +2)+String.fromCharCode(64 + i-52);
     temp=temp.toLowerCase();
     result=temp;
   }
  // console.log(result) ;
}
if(length%2!=0){
  collection=collection.sort(sortNumber);
  i=collection[Math.floor(collection.length/2)];
  //console.log(i) ;
  if(i<=26){
    temp=String.fromCharCode(64 + i);
    temp=temp.toLowerCase();
    result=temp;
  }else if(i<=52){
    temp=String.fromCharCode(64 +1)+String.fromCharCode(64 + i-26);
    temp=temp.toLowerCase();
    result=temp;
  }else{
    temp=String.fromCharCode(64 +2)+String.fromCharCode(64 + i-52);
    temp=temp.toLowerCase();
    result=temp;
  }
}
  return result;
}

module.exports = median_to_letter;
function sortNumber(a,b){
  return a-b;
}
