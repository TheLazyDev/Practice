function caesarCipher(str,num){
  num = num % 26;

  var lowerCaseString = str.toLowerCase();
  var alphabat = 'abcdefghijklmnopqrsuvwxyz'.split('');
  var newString = '';
  for(var i=0; i < lowerCaseString.length;i++){
    var currentLetter = lowerCaseString[i];

    if(currentLetter === " ") {
      newString += currentLetter;
      continue;
    }

    var currentIndex = alphabat.indexOf(currentLetter);
    var newIndex = currentIndex + num;

    if(newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0) newIndex = 26 + newIndex;

    if(str[i] === str[i].toUpperCase()){
      newString += alphabat[newIndex].toUpperCase()
    }
    else  newString += alphabat[newIndex]
   
  }

  return newString;
}

console.log(caesarCipher("Javascript",-90))