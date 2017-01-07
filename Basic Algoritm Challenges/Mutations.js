
function mutation(arr) {
  var splitted0 = arr[0].toLowerCase().split("");
  var splitted1 = arr[1].toLowerCase().split("");
  var buldu = true;
  for (var i = 0; i < splitted1.length; i++) {
    if (splitted0.indexOf(splitted1[i]) < 0)  {
      buldu = false;
      break;
    }
  }
return buldu;
}


mutation(["hello", "hey"]);