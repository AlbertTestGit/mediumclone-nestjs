import {MigrationInterface, QueryRunner} from "typeorm";

export class SeedDb1628572351710 implements MigrationInterface {
    name = 'SeedDb1628572351710'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`
        );

        // password: 123
        await queryRunner.query(
          `INSERT INTO users (username, email, password) VALUES ('user1', 'user1@gmail.com', '$2b$10$4.SPea3IAjwb./rjB9hY2uL.9oSaIET4c9C/7kxfye7lkZICRDaK2')`
        );

        await queryRunner.query(
          `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article desc', 'first article body', 'coffee,dragons', 1)`
        );

        await queryRunner.query(
          `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'second article desc', 'second article body', 'coffee,dragons', 1)`
        );
    }

    public async down(): Promise<void> {}

}
