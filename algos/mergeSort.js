function mergeSort(array){
    if(array.length < 2) return array;
    var midIndex = Math.floor(array.length / 2);
    // console.log(midIndex);
    var firstHalf = array.slice(0,midIndex);
    var secondHalf = array.slice(midIndex);
  
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));

}



function merge(array1,array2){
  var result = [];

  while(array1.length && array2.length){
    var minElem;

    if(array1[0] < array2[0]) minElem = array1.shift();
    else minElem = array2.shift();
    result.push(minElem);
  }

  if(array1.length) result = result.concat(array1);
  else result = result.concat(array2);

  return result;

}






console.log(mergeSort([100,-20,40,-30,16,-100,-101]))