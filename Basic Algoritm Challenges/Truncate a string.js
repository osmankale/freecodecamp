function truncateString(str, num) {
  var truncate = "";
  if (num >= str.length) {
  	return str;
  } 
    else if (num > 3) {
     truncate = str.slice(0, num - 3) + "..." ;
  } else if (num <= 3) {
  	truncate = str.slice(0, num) + "..." ;
  }
  return truncate;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);