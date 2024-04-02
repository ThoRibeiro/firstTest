const getShippingCost = require("../index.js")

describe('Fonction getShippingCost', () => {

    test('calcule correctement les frais de port avec un coût de livraison spécial', () => {
        const articleExample = [
            { id: "1234", priceEur: 20, weightKg: 0.3, quantity: 2, specialShippingCost : 10 },
            { id: "5678", priceEur: 20, weightKg: 0.1, quantity: 2 },
        ];
        const shippingCost = getShippingCost(articleExample);
        expect(shippingCost).toBe(22);
    });

    test('calcule correctement les frais de port sans coût de livraison spécial', () => {
        const articlesSansSpecial = [{ id: "5678", priceEur: 20, weightKg: 0.1, quantity: 2 }];
        const shippingCost = getShippingCost(articlesSansSpecial);
        expect(shippingCost).toBe(2);
    });

    test('calcule correctement les frais de port lorsque le prix total est supérieur à 100', () => {
        const articlesOver100 = [
            { id: "1234", priceEur: 50, weightKg: 0.3, quantity: 2, specialShippingCost : 10 },
            { id: "5678", priceEur: 50, weightKg: 0.1, quantity: 2 },
        ];
        const shippingCost = getShippingCost(articlesOver100);
        expect(shippingCost).toBe(0);
    });
});
