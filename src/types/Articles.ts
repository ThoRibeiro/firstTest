export type Article = {
    id: string;
    name: string;
    priceEur: number;
    weightKg: number;
    specialShippingCost?: number;
};

export type ArticleInOrder = {
    article: Article;
    quantity: number;
};