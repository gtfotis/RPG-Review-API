'use strict';

const express = require('express');
const router = express.Router();
const GamesModel = require('../models/Games');
const ReviewsModel = require('../models/Reviews');
// const slugify = require('slugify');

router.get('/:slug?', async(req, res) => {
    if (!!req.params.slug) {
        const { slug } = req.params;
        const theGame = await GamesModel.getBySlug(slug);
        // const theReview = await ReviewsModel.getByGameId(game_id);
        // res.render('template', {
        //     locals: {
        //         title: 'CEO DETAILS',
        //         data: theCEO
        //     },
        //     partials: {
        //         body: 'partials/ceo-details',
        //     
        // });
        res.json(theGame).status(200);
    } else {
        const GamesData = await GamesModel.getAll();
        // res.render('template', {
        //     locals: {
        //         title: 'List of Apple CEO',
        //         data: ExecutiveData
        //     },
        //     partials: {
        //         body: 'partials/home',
        //     },
        // });
        res.json(GamesData).status(200);
    }
});

// router.post('/', async(req, res) => {
//     const { ceo_name, ceo_year } = req.body;
//     const slug = slugify(ceo_name, {
//         replacement: '_',
//         lower: true,
//         strict: true
//     });

//     const newExecutive = new ExecutiveModel(null, ceo_name, slug, ceo_year);

//     const response = await newExecutive.addEntry();

//     res.sendStatus(200);
// });

// router.post('/delete', async(req, res) => {
//     const { id, ceo_name, slug, ceo_year } = req.body;
//     const executiveToDelete = new ExecutiveModel(id, ceo_name, slug, ceo_year);
//     const response = await executiveToDelete.deleteEntry();
//     console.log('DELETE ROUTE RESPONSE IS: ', response);
//     res.sendStatus(200);
// });

module.exports = router;