function destroyer(arr) {
  var rmvlst = Array.prototype.slice.call(arguments, 1);
  
  return arr.filter(function(elm) {
    return rmvlst.indexOf(elm) == -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);