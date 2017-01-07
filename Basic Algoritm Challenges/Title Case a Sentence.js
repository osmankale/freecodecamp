function titleCase(str) {
	
var myStr =	str.split(" ");
	
for (var i = 0; i < myStr.length; i++) {
	myStr[i] = myStr[i].charAt(0).toUpperCase() + myStr[i].slice(1).toLowerCase();
}
	return myStr.join(" ");
}

titleCase("I'm a little tea pot");