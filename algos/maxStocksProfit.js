function maxStocksProfit(priceArray){
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;

  var changeBuyPrice = true;
  for(var i= 0; i < priceArray.length;i++){
    if(changeBuyPrice) buyPrice = priceArray[i];
    sellPrice = priceArray[i + 1];

    if(sellPrice < buyPrice){
        changeBuyPrice = true;
    } else {
      var tempProfit = sellPrice - buyPrice
      if(tempProfit > maxProfit) maxProfit = tempProfit
      changeBuyPrice = false;

    }
  }


  return maxProfit;
}


console.log(maxStocksProfit([10,18,4,5,9,6,16,12]))