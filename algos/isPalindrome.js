function isPalindrome(string){

    string = string.toLowerCase();

    var charactersArray = string.split('');
    var vaildCharacters = 'abcdefghijklmnopqrsuvwxyz'.split('');

    var lettersArray = [];

    charactersArray.forEach((character)=>{
          if(vaildCharacters.indexOf(character) >= 0) lettersArray.push(character);
    })
    
    
    if(lettersArray.join('') === lettersArray.reverse().join('')){
      return true;
    } 
    else return false;
}

console.log(isPalindrome("Race Car"))