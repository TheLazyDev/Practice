function twoSum(numArray,sum){
    var pairs = [];
    var hashTable = [];

    for(var i = 0;i < numArray.length;i++){
        var currNum = numArray[i];
        var counterPart = sum - currNum;

        if(hashTable.indexOf(counterPart) !== -1){
            pairs.push([currNum,counterPart]);
        }
        hashTable.push(currNum);
    }

    return pairs;
}


console.log(twoSum([40,11,19,17,-12],28))