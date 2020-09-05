const express = require("express");
const router = express.Router();

const path = require("path");
const formidable = require("formidable");
const fs = require("fs");
const XLSX = require("xlsx");
const os = require("os");
const sqlite3 = require("sqlite3");



const checkblankcells = require("./checkblankcells");

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
        "Segment"
    ];
    console.log("colcheck", filename);

    if (Object.keys(xlText[0]).sort().toString() == orig_keys.sort().toString()) {
        console.log("Format correct");
        checkblankcells(req, res, xlText);

    } else {
        console.log('Column check failed');
        res.render("failed", {
            message: `Format of uploaded file ${filename} is not correct, please use the template`,
        });
        return false;
    }
};

module.exports = checkcolumnsmw;