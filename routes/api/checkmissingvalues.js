const path = require('path');
const formidable = require('formidable');
const fs = require('fs');


const express = require('express');
const checkmissingvaluesmw = require('../../middleware/checkmissingvaluesmw');
const router = express.Router();




router.post('/', (req, res) => {

    filename = req.body.filename;

    if (!filename) {
        res.render('failed', {
            message: 'Please select a file'
        })
    } else {



        if (checkmissingvaluesmw(req, res, filename)) {

            console.log(`Data in file: ${filename} is complete`);

            res.render('nextaction', {
                filename: filename,
                message: 'Check duplicates',
                nextaction: 'checkduplicates',
                nextactiontext: 'checkduplicates'
            })

        } else {
            res.render('failed', {
                message: `Some rows have missing values, please check`
            });


        }

    }
});


module.exports = router;