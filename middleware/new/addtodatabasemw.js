const path = require('path');
const XLSX = require('xlsx');
const express = require('express');
const sqlite3 = require('sqlite3')
const os = require('os');


const addtodatabasemw = function (req, res, xlText) {



  dbname = path.join('public', 'databases', os.hostname());

  let db = new sqlite3.Database(dbname, (err) => {});

  rows = [];

  for (i = 0; i < xlText.length; i++) {



    db.run(`INSERT INTO customers(first_name, last_name, email, phone, permitted, segment) VALUES(?,?,?,?,?,?)`,
      [xlText[i]['FirstName'].toString(), xlText[i]['LastName'].toString(), xlText[i]['Email'].toString(), xlText[i]['Phone'].toString(), xlText[i]['Permitted'],
        xlText[i]['Segment'].toString()
      ],
      function (err, row) {
        if (err) {

          res.render('failed', {
            message: `here ${err}`

          })
        } else {
          res.render('addedcustomers', {
            title: `New customers loaded`,
            rows: xlText

          })
        }

      });


  }


  // close the database connection
  db.close();

}

module.exports = addtodatabasemw;