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

    const addtodatabasemw = function (filename) {



        var workbook = XLSX.readFile(filename);
        var sheet_name_list = workbook.SheetNames;
        var xlText = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);




        dbname = path.join('public', 'databases', os.hostname());

        let db = new sqlite3.Database(dbname, (err) => {});

        rows = [];

        for (i = 0; i < xlText.length; i++) {



            db.run(`INSERT INTO customers(first_name, last_name, email, phone, permitted, segment) VALUES(?,?,?,?,?,?)`,
                [xlText[i]['FirstName'], xlText[i]['LastName'], xlText[i]['Email'], xlText[i]['Phone'], xlText[i]['Permitted'],
                    xlText[i]['Segment']
                ],
                function (err, row) {
                    if (err) {

                        res.render('failed', {
                            message: `here ${err}`

                        })
                    }

                });


        }


        // close the database connection
        db.close();
        res.render('addedcustomers', {
            title: `New customers loaded`,
            rows: xlText

        })
    }
    addtodatabasemw(filename)

})

module.exports = router;