function chunkArrayInGroups(arr, size) {
  
  var sliced = [];
  
    for (var i = 0; i < arr.length ; i += size) {
      sliced.push(arr.slice(i, i + size)) ;
    }
  


  return sliced;
}


chunkArrayInGroups(["a", "b", "c", "d"], 2);
