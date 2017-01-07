function repeatStringNumTimes(str, num) {
  var repeatedStr = "";
  for (var i = 0; i < num; i++) {
  	if ( num > 0 ) {
  		repeatedStr += str; }
  	else if (num <= 0) {
  	     return "";
  	}

  		
  }
  return repeatedStr;
}

repeatStringNumTimes("abc", 3);