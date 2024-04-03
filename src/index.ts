type Article = {
    id: string;
    priceEur: number;
    weightKg: number;
    quantity: number;
    specialShippingCost?: number;
};

function getShippingCost(articles: Article[]) {
    const totalPrice = articles.reduce(
        (total, article) => total + article.priceEur * article.quantity,
        0
    );
    return totalPrice >= 100
        ? 0
        : articles.reduce(
            (total, article) =>
                total +
                (article.specialShippingCost || article.weightKg * 10) *
                article.quantity,
            0
        );
}

// retourne le total de la commande
function getOrderCost(articles: Article[]): { withoutShipping: number, shipping: number, withShipping: number } {
    const totalWithoutShipping = articles.reduce(
        (total, article) => total + article.priceEur * article.quantity,
        0
    );
    const shippingCost = getShippingCost(articles);
    const totalWithShipping = totalWithoutShipping + shippingCost;

    return {
        withoutShipping: totalWithoutShipping,
        shipping: shippingCost,
        withShipping: totalWithShipping
    };
}
export { getShippingCost, getOrderCost};