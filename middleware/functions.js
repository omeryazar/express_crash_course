const express = require('express');
const router = express.Router();

const path = require('path');
const formidable = require('formidable');
const fs = require('fs');
const XLSX = require('xlsx');
const os = require('os');
const sqlite3 = require('sqlite3');




//Check for missing values
const checkblankcells = function (req, res, xlText) {

    // var workbook = XLSX.readFile(filename);
    // var sheet_name_list = workbook.SheetNames;
    // var xlText = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    if (xlText.indexOf(undefined) > -1) {
        console.log('missing data')
        return false;
    } else {

        //Check for e-mail format
        console.log('no missing data')

        //Check for phone number
        return true



    }
}

module.exports = checkblankcells;

const checkcolumnsmw = function (req, res, xlText) {
    // var workbook = XLSX.readFile(filename);
    // var sheet_name_list = workbook.SheetNames;
    // var xlText = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    ks = Object.keys(xlText[0]);

    orig_keys = [
        "FirstName",
        "LastName",
        "Email",
        "Phone",
        "Permitted",
        "Segment",
    ];
    console.log("colcheck", filename);

    if (Object.keys(xlText[0]).sort().toString() == orig_keys.sort().toString()) {
        console.log("Format correct");
        return true;
    } else {
        res.render("failed", {
            message: `Format of uploaded file ${filename} is not correct, please use the template`,
        });
        return false;
    }
};

module.exports = checkcolumnsmw;


const checkfilenamemw = function (req, res, filename) {

    filename = req.body.filename;
    allowedfiletypes = ['.xls', '.xlsx', '.XLS', '.XLSX'];
    extension = path.extname(filename);
    console.log('namecheck', filename)

    if (allowedfiletypes.indexOf(extension) > -1) {

        console.log(`The selected filetype ${extension} is Excel`)
        return true

    } else {
        console.log('Extension failure')
        res.render('failed', {
            message: `The selected filetype ${extension} is not Excel`
        });

        return false;

    }


}

module.exports = checkfilenamemw;