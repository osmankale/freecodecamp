function palindrome(str) {


var lastStr = str.split("").reverse().join("").toLowerCase().replace(/[\W_]/g, '');
var firstStr = str.toLowerCase().replace(/[\W_]/g, '');

    return lastStr === firstStr;

}

palindrome("eye");