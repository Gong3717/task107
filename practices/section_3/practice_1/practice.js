function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result=[];
  //collection.sort();
  var isRepeat;
  for(var i=0;i<collection_a.length;i++)
  {
    isRepeat = false;
    for(var j =0;j<object_b.value.length;j++)
    {
      if(collection_a[i].key===object_b.value[j])
      {
        isRepeat = true;
        result.push({key: collection_a[i].key,count: collection_a[i].count-1}) ;
        break;
      }
    }
    if(!isRepeat ){
      result.push({key: collection_a[i].key,count: collection_a[i].count});
    }
  }
  return result;
}

module.exports = create_updated_collection;
