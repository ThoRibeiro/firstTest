const articleExample = [
    { id: "1234", priceEur: 20, weightKg: 0.3, quantity: 2 },
    { id: "5678", priceEur: 20, weightKg: 0.1, quantity: 2 },
];

function getShippingCost(articles){
    // return number
    let totalWeight = 0;
    let totalPrice = 0;

    articles.forEach(article => {
        totalWeight += article.weightKg * article.quantity;
    });
    let shipping = totalWeight * 10;
    articles.forEach(article => {
        totalPrice += article.priceEur * article.quantity;
    })

    if(totalPrice>=100){
        shipping = 0
    }
    return shipping;
}

const getShipping = getShippingCost(articleExample)
console.log("Frais de port :", getShipping, "euros");