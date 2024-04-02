const articleExample = [
    { id: "1234", priceEur: 20, weightKg: 0.3, quantity: 2, specialShippingCost : 10 },
    { id: "5678", priceEur: 20, weightKg: 12, quantity: 2 },
];

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
        console.log(totalWeight)
        shipping += totalWeight * 10;
    }
    if(totalPrice >= 100){
        shipping = 0;
    }

    return shipping;
}

const getShipping = getShippingCost(articleExample);
console.log("Frais de port :", getShipping, "euros");
