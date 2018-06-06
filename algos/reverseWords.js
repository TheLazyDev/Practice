function reverseWords(string) {
    
    var stringArray = string.split(' ');

    var reversedWordsArr = [];

    


   stringArray.forEach((word)=>{
        var reverseWord = '';
        for(var i = word.length - 1;i >=0; i--){
            reverseWord += word[i]
        }

        reversedWordsArr.push(reverseWord);
   })

   console.log(reversedWordsArr)
    
   return reversedWordsArr.join(' ');

}


console.log(reverseWords("hello world!"))