import { Order } from "../Order"

describe("Order.createOrder", () => {
    describe("when article ID is found", () => {
        it("returns an Order object with articles and quantities", () => {
            const articles = [
                { articleId: "1234", quantity: 2 },
                { articleId: "5678", quantity: 3 }
            ];
            const order = Order.createOrder(articles);
            expect(order.articlesInOrder).toHaveLength(2);
            expect(order.articlesInOrder[0].article.id).toEqual("1234");
            expect(order.articlesInOrder[1].article.id).toEqual("5678");
            expect(order.articlesInOrder[0].quantity).toEqual(2);
            expect(order.articlesInOrder[1].quantity).toEqual(3);
        });
    });

    describe("when article ID is not found", () => {
        it("throws an error", () => {
            const articles = [
                { articleId: "1234", quantity: 2 },
                { articleId: "9999", quantity: 1 }
            ];
            expect(() => {
                Order.createOrder(articles);
            }).toThrowError(`The article with id ${articles[1].articleId} is not found.`);
        });
    });
});
