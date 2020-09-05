const path = require('path');
const formidable = require('formidable');
const fs = require('fs');


const express = require('express');
const checkformatmw = require('../../middleware/checkformatmw');
const router = express.Router();




router.post('/', (req, res) => {

    filename = req.body.filename;

    if (!filename) {
        res.render('failed', {
            message: 'Please select a file'
        })
    } else{
   
    // console.log(filename)
    // console.log(checkformatmw(req, res, filename));

 if (checkformatmw(req, res, filename)) {

    console.log(`File: ${filename} has all required columns`);

 res.render('nextaction', {
     filename: filename,
     message: 'Check missing',
     nextaction: 'checkmissingvalues',
     nextactiontext: 'checkmisssingvalues'
 })

 } else {
    res.render('failed', {
        message: `Format of uploaded file ${filename} is not correct, please use the template`
 });


}

}
});


module.exports= router;

