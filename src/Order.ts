import {Article, ArticleInOrder} from "./types/Articles";

import { sendMail } from "./lib/email";

const ARTICLES: Article[] = [
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
        specialShippingCost: 4,
    },
];

export class Order {
    id!: string;
    articlesInOrder: ArticleInOrder[] = [];



    submitted: boolean = false;

    static createOrder(
        articlesInOrder: { articleId: string; quantity: number }[]
    ): Order {
        const order = new Order();

        for (const { articleId, quantity } of articlesInOrder) {
            const article = ARTICLES.find((article) => article.id === articleId);
            if (!article) {
                throw new Error(`Article with ID ${articleId} not found.`);
            }
            order.articlesInOrder.push({ article, quantity });
        }

        return order;
    }

    submitOrder() {
        this.submitted = true;
    }

    private getTotalPrice(): number {
        return this.articlesInOrder.reduce(
            (total, { article, quantity }) => total + article.priceEur * quantity,
            0
        );
    }

    getShippingCost(): number {
        return this.getTotalPrice() >= 100
            ? 0
            : this.articlesInOrder.reduce(
                (total, { article, quantity }) =>
                    total +
                    (article.specialShippingCost || article.weightKg * 10) * quantity,
                0
            );
    }

    getOrderCost(): {
        totalWithoutShipping: number;
        shipping: number;
        totalWithShipping: number;
    } {
        const totalWithoutShipping = this.getTotalPrice();
        const shipping = this.getShippingCost();

        return {
            totalWithoutShipping,
            shipping,
            totalWithShipping: totalWithoutShipping + shipping,
        };
    }
}