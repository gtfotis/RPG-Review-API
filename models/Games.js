'use strict';

const db = require('./conn');
class GamesModel {
    constructor(id, name, slug, genre, release_date, cover_art, screenshot_1, screenshot_2, screenshot_3, game_description) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.genre = genre;
        this.release_date = release_date;
        this.cover_art = cover_art;
        this.screenshot_1 = screenshot_1;
        this.screenshot_2 = screenshot_2;
        this.screenshot_3 = screenshot_3;
        this.game_description = game_description;
    }

    static async getAll() {
        try {
            const response = await db.any(
                `SELECT * FROM games;`
            );
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    static async getBySlug(slug) {
        try {
            const response = await db.one(
                `SELECT * FROM games 
                INNER JOIN review 
                ON games.id = review.game_id
                WHERE slug = '${slug}';`
            );
            return response;

        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    async addEntry() {
        try {
            const response = await db.result(
                `INSERT INTO games 
                    (name, slug, genre, release_date, cover_art, screenshot_1, screenshot_2, screenshot_3, game_description)
                VALUES
                    ('${this.name}', '${this.slug}', '${this.genre}', '${this.release_date}', '${this.cover_art}', '${this.screenshot_1}', '${this.screenshot_2}', '${this.screenshot_3}', '${this.game_description}')`
            );
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    async deleteEntry() {
        try {
            const response = await db.result(
                `DELETE FROM games WHERE id = $1;`, [this.id]
            );
            console.log('DELETE ENTRY RESPONSE: ', response);
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
}

module.exports = GamesModel;