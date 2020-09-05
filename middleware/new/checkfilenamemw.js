const express = require('express');
const router = express.Router();

const path = require('path');
const formidable = require('formidable');
const fs = require('fs');
const XLSX = require('xlsx');
const os = require('os');
const sqlite3 = require('sqlite3');

const checkcolumnsmw = require("./checkcolumnsmw");




const checkfilenamemw = function (req, res, filename, xlText) {


    allowedfiletypes = ['.xls', '.xlsx', '.XLS', '.XLSX'];
    extension = path.extname(filename);
    console.log('namecheck', filename)

    if (allowedfiletypes.indexOf(extension) > -1) {

        console.log(`The selected filetype ${extension} is Excel`)
        checkcolumnsmw(req, res, xlText);

    } else {
        console.log('Extension failure')
        res.render('failed', {
            message: `The selected filetype ${extension} is not Excel`
        });

        return false;

    }


}

module.exports = checkfilenamemw;