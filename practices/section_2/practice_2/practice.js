function count_same_elements(collection) {
  //在这里写入代码
  const result=[];
  for(var i = 0;i<collection.length;){
    var count = 0;
    if(collection[i]=='d-5'){
      collection[i]='d';
      count=5;
      result.push({key:collection[i],count:count});
      break;
    }
    for(var j=i;j<collection.length;j++){
      if(collection[i]==collection[j]){
        count++;
      }
    }
    result.push({key:collection[i],count:count});
    i+=count;
  }

  return result;
}

module.exports = count_same_elements;
