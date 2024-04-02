const articleExample = [
    { id: "1234", priceEur: 40, weightKg: 0.3, quantity: 2 },
    { id: "5678", priceEur: 20, weightKg: 0.1, quantity: 5 },
];

function getShippingCost(articles){
    // return number
    let totalWeight = 0;

    articles.forEach(article => {
        totalWeight += article.weightKg * article.quantity;
    });

    const shipping = totalWeight * 10;

    return shipping;
}

const getShipping = getShippingCost(articleExample)
console.log("Frais de port :", getShipping, "euros");