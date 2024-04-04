import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { ArticleInOrder } from "./ArticleInOrder";

const BASE_ARTICLES = [
    {
        name: "Câble HDMI",
        priceEur: 20,
        weightKg: 0.1,
    },
    {
        name: "Cuisse de poulet",
        priceEur: 10,
        weightKg: 0.15,
        specialShippingCost: 4,
    },
];

@Entity()
export class Article extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!: string;

    @Column()
    priceEur!: number;

    @Column()
    weightKg!: number;

    @Column({ nullable: true })
    specialShippingCost!: number | null;

    @OneToMany(() => ArticleInOrder, (articleInOrder) => articleInOrder.article)
    ordersWithArticle!: ArticleInOrder[];

    static async createBaseArticles() {
        for (const baseArticle of BASE_ARTICLES) {
            const article = new Article();
            article.name = baseArticle.name;
            article.priceEur = baseArticle.priceEur;
            article.weightKg = baseArticle.weightKg;
            article.specialShippingCost = baseArticle.specialShippingCost ?? null;

            await article.save();
        }
    }
}