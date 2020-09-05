const express = require('express');
const router = express.Router();

const path = require('path');
const formidable = require('formidable');
const fs = require('fs');
const XLSX = require('xlsx');
const os = require('os');

const checkphonenumbermw = require('./checkphonenumbermw')



//Check for missing values
const checkmailformatmw = function (req, res, xlText) {

    wrongmail = []

    for (i = 0; i < xlText.length; i++) {

        var a = xlText[i].Email.toString();

        if (!a.includes('@') || !a.includes('.')) {

            wrongmail.push(a);

        }
    }

    if (wrongmail.length > 0) {
        console.log('wrong mails')
        res.render('failed', {
            message: `Wrong mails: ${wrongmail}`
        });
        return false;

    } else {
        console.log('All mails are correct')
        checkphonenumbermw(req, res, xlText)
    }
}
module.exports = checkmailformatmw;