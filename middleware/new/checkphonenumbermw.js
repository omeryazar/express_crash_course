const express = require('express');
const router = express.Router();

const path = require('path');
const formidable = require('formidable');
const fs = require('fs');
const XLSX = require('xlsx');
const os = require('os');


const checkduplicatesmw = require('./checkduplicatesmw')


//Check phone numbers
const checkphonenumbermw = function (req, res, xlText) {

    wrongphone = []

    for (i = 0; i < xlText.length; i++) {

        var a = xlText[i].Phone.toString();

        if (!a.startsWith('5') || a.length != 10) {

            wrongphone.push(a);

        }
    }

    if (wrongphone.length > 0) {
        console.log('wrong phones')
        res.render('failed', {
            message: `Wrong phones: ${wrongphone}`
        })
        return false;

    } else {
        console.log('All phone numbers are correct')
        checkduplicatesmw(req, res, xlText)
    }
}

module.exports = checkphonenumbermw;