function binarySearch(numArray,key){
    var midIndex = Math.floor(numArray.length / 2)
    var midElem = numArray[midIndex];

    if(midElem === key)  return true
    else if(midElem < key && numArray.length > 1){
        return binarySearch(numArray.splice(midIndex,numArray.length),key)
    }
    else if(midElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0,midIndex),key)
    }
    else return false;
}


console.log(binarySearch([5,7,12,16,36,39,42,56,71],71))