function rot13(str) { // LBH QVQ VG!
  
  var char13 = [] ;
  var decrypted = [];

  for (var i = 0; i < str.length; i++) {
  	if (str.charCodeAt(i) >= 32 &&  str.charCodeAt(i) < 65) {
        
        char13.push(str.charCodeAt(i));

  	} 
  	else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 78) {
  		char13.push(str.charCodeAt(i) + 13);

  	}
  	else {
  		char13.push(str.charCodeAt(i) - 13);
  		
  	}
  	
  }
return String.fromCharCode.apply(null, char13) ;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");