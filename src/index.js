 function getShippingCost(articles){
    // return number
     let totalWeight = 0;
     let totalPrice = 0;
     let shipping = 0;

     articles.forEach(article => {
         totalPrice += article.priceEur * article.quantity;
         if (article.specialShippingCost !== undefined) {
             shipping += article.specialShippingCost * article.quantity;
         }
         if(article.specialShippingCost === undefined) {
             totalWeight += article.weightKg * article.quantity;
         }
     });

     if (articles.specialShippingCost === undefined) {
         shipping += totalWeight * 10;
     }
     if(totalPrice >= 100){
         shipping = 0;
     }
     return shipping;
}

    module.exports = getShippingCost;
