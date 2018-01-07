'use strict';
var calculate_median = function(collection){
var result=0;
var temp=[];
var length=collection.length;
if(length%2==0){
  for(var i =1;i<length;){
    temp.push(collection[i]);
    i=i+2;
  }
  temp=temp.sort(); 
  result=temp[Math.floor(temp.length/2)];
  return result;
}
if(length%2!=0){
  for(var i =1;i<length;){
    temp.push(collection[i]);
    i=i+2;
  }
  temp=temp.sort();
  var lowmedian=temp[temp.length/2-1];
  var highmedian=temp[temp.length/2];
  result=(lowmedian+highmedian)/2;
  return result;
  }
  
 }

module.exports = calculate_median;
