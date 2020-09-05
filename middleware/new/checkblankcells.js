const express = require('express');
const router = express.Router();

const path = require('path');
const formidable = require('formidable');
const fs = require('fs');
const XLSX = require('xlsx');
const os = require('os');
const sqlite3 = require('sqlite3');


const checkmailformatmw = require("./checkmailformatmw");



//Check for missing values
const checkblankcells = function (req, res, xlText) {


    if (xlText.indexOf(undefined) > -1) {
        console.log('missing data');
        res.render('failed', {
            message: `The selected file has blank cells`
        });
        return false;
    } else {


        console.log('no missing data')


        checkmailformatmw(req, res, xlText)



    }
}

module.exports = checkblankcells;