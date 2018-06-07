// function mergeSort (arr) {    
//   if (arr.length < 2) return arr;
//   var middleIndex = Math.floor(arr.length / 2);
//   var firstHalf = arr.slice(0, middleIndex);
//   var secondHalf = arr.slice(middleIndex);
  
//   return merge(mergeSort(firstHalf), mergeSort(secondHalf));
// }

// function merge (array1, array2) { 
//   var result = [];
//   while (array1.length && array2.length) {
//     console.log('while');
//     var minElem;
//     if (array1[0] < array2[0]) minElem = array1.shift();
//     else minElem = array2.shift();
//     result.push(minElem);
//   }
  
//   if (array1.length) result = result.concat(array1);
//   else result =result.concat(array2);
//   return result;
// }

// console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));

function maxStockProfit (pricesArr) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;
  
  var changeBuyPrice = true;
  
  for (var i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];
    
    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    }
    else {
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }
  
  return maxProfit;
}
 
console.log(maxStockProfit([32,46,26,38,40,48,42]));