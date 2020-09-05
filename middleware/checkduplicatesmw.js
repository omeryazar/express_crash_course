const path = require('path');
const os = require('os');
const XLSX = require('xlsx');
const express = require('express');
const sqlite3 = require('sqlite3')


var xlphonelist = [];
var dbphonelist = [];


// Check for missing data


const checkduplicatesmw = function (filename) {

    dbphonelist = [];
    xlphonelist = [];
    intersection = [];

    var workbook = XLSX.readFile(filename);
    var sheet_name_list = workbook.SheetNames;
    var xlText = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);


    dbname = path.join('public', 'databases', os.hostname());
    let db = new sqlite3.Database(dbname, (err) => {});

    let sql = 'SELECT * FROM customers';

    db.all(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        for (i = 0; i < rows.length; i++) {


            dbphonelist.push(rows[i].phone)


        }
        // console.log(dbphonelist);

        for (i = 0; i < xlText.length; i++) {

            xlphonelist.push(xlText[i]['Phone'])

        }

        // console.log('XLphone:');
        // console.log(xlphonelist);

        // console.log('DBphone:');
        // console.log(dbphonelist);


        intersection = xlphonelist.filter(x => dbphonelist.includes(x));
        console.log('intersection from mw')
        console.log(intersection);
        // console.log(intersection.length);
        return intersection;


    });






    // var intersection = []



    // console.log('intersection');
    // console.log(intersection.length)

    // if (intersection.length == 0) {

    //     // console.log('=0')
    //     return true;


    // } else {
    //     // console.log('nah=0')
    //     return false;

    // }

}



module.exports = checkduplicatesmw;