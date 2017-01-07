function largestOfFour(arr) {
  var largestNumbers = [];	
  for (var i = 0; i < arr.length; i++) {
    	largestNumbers.push(Math.max.apply(null, arr[i]));

     }
  return largestNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);