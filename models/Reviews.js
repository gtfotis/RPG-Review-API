// 'use strict';

// const db = require('./conn');
// class ReviewsModel {
//     constructor(id, text_review, number_review, game_id) {
//         this.id = id;
//         this.text_review = text_review;
//         this.number_review = number_review;
//         this.game_id = game_id;
//     }

//     static async getAll() {
//         try {
//             const response = await db.any(
//                 `SELECT * FROM review;`
//             );
//             return response;
//         } catch (error) {
//             console.error('ERROR: ', error);
//             return error;
//         }
//     }

//     static async getByGameId(game_id) {
//         try {
//             const response = await db.one(
//                 `SELECT * FROM review WHERE game_id = '${game_id}';`
//             );
//             return response;

//         } catch (error) {
//             console.error('ERROR: ', error);
//             return error;
//         }
//     }

//     // async addEntry() {
//     //     try {
//     //         const response = await db.result(
//     //             `INSERT INTO games 
//     //                 (name, slug, genre, release_date, cover_art, screenshot_1, screenshot_2, screenshot_3, game_description)
//     //             VALUES
//     //                 ('${this.name}', '${this.slug}', '${this.genre}', '${this.release_date}', '${this.cover_art}', '${this.screenshot_1}', '${this.screenshot_2}', '${this.screenshot_3}', '${this.game_description}')`
//     //         );
//     //         return response;
//     //     } catch (error) {
//     //         console.error('ERROR: ', error);
//     //         return error;
//     //     }
//     // }

//     // async deleteEntry() {
//     //     try {
//     //         const response = await db.result(
//     //             `DELETE FROM games WHERE id = $1;`, [this.id]
//     //         );
//     //         console.log('DELETE ENTRY RESPONSE: ', response);
//     //         return response;
//     //     } catch (error) {
//     //         console.error('ERROR: ', error);
//     //         return error;
//     //     }
//     // }
// }

// module.exports = ReviewsModel;