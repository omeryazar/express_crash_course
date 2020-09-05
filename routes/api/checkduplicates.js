const path = require('path');
const formidable = require('formidable');
const fs = require('fs');
const XLSX = require('xlsx');
const os = require('os');
const sqlite3 = require('sqlite3')


const express = require('express');
const router = express.Router();




router.post('/', (req, res) => {

    filename = req.body.filename;

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


            for (i = 0; i < xlText.length; i++) {

                xlphonelist.push(xlText[i]['Phone'])

            }

            xlphoneliststr = xlphonelist.map(String)
            console.log(xlphoneliststr);
            console.log(dbphonelist);

            intersection = xlphoneliststr.filter(x => dbphonelist.includes(x));
            console.log('intersection from mww')
            console.log(intersection);

            if (intersection.length === 0) {

                console.log(`Data in file: ${filename} has no duplicates`);

                res.render('nextaction', {
                    filename: filename,
                    message: 'Add to database duplicates',
                    nextaction: 'addtodatabase',
                    nextactiontext: 'addtodatabase'
                })

            } else {
                res.render('failed', {

                    message: `Duplicate phone numbers found.`
                })



            }
        })

    }
    checkduplicatesmw(filename)
})



module.exports = router;