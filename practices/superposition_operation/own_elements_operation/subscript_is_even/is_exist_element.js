'use strict';
var is_exist_element = function(collection,element){
var isExist=false;
  for(var i =0;i<collection.length;i++){
    if((i % 2==0) && (collection[i]===element) ){
        isExist=true;
    }

  } 
  return isExist;
};
module.exports = is_exist_element;
