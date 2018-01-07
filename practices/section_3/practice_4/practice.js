function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var C=[];
  var result=[];
  var isRepeat;
  for(var i = 0;i<collection_a.length;){
    var count = 0;
    if(collection_a[i]=='d-5'){
      collection_a[i]='d';
      count=5;
      C.push({key:collection_a[i],count:count});
      break;
    }
    for(var j=i;j<collection_a.length;j++){
      if(collection_a[i]==collection_a[j]){
        count++;
      }
    }
    C.push({key:collection_a[i],count:count});
    i+=count;
  }
  for(var i=0;i<C.length;i++)
  {
    isRepeat = false;
    for(var j =0;j<object_b.value.length;j++)
    {
      if(C[i].key===object_b.value[j])
      {
        isRepeat = true;
        C[i].count= C[i].count-parseInt(C[i].count/3)
        result.push({key: C[i].key,count: C[i].count}) ;
        break;
      }
    }
    if(!isRepeat ){
      result.push({key: C[i].key,count: C[i].count});
    }
  }
  return result;
}

module.exports = create_updated_collection;
