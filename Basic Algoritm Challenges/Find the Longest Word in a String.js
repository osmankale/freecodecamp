function findLongestWord(str) {
    var myLength = [];
    var myStr = str.split(" ");
    for (var i = 0; i < myStr.length; i++) {
    	myLength.push(myStr[i].length);

     }
return Math.max.apply(null, myLength);
}

findLongestWord("The quick brown fox jumped over the lazy dog");