import { ArticleInOrder } from "./types/Articles";

const ARTICLES = [
    {
        id: "1234",
        name: "Câble HDMI",
        priceEur: 20,
        weightKg: 0.1,
    },
    {
        id: "5678",
        name: "Cuisse de poulet",
        priceEur: 10,
        weightKg: 0.15,
    },
];
export class Order {
    id!: string;
    articlesInOrder!: ArticleInOrder[];

    static createOrder(
        articlesInOrder: { articleId: string; quantity: number }[]
    ): Order {
        // retourner un objet Order avec les articles et leur quantité
        // émettre une erreur si l'un des articles n'existe pas dans l'objet ARTICLES
        const order = new Order();
        order.articlesInOrder = articlesInOrder.map(({ articleId, quantity }) => {
            const foundArticle = ARTICLES.find(article => article.id === articleId);
            if (!foundArticle) {
                throw new Error(`The article with id ${articleId} is not found.`);
            }
            return { article: foundArticle, quantity };
        });
        return order;
    }
}