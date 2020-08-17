
const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const path = require('path');
const fs = require('fs')
const os = require('os');
const XLSX = require('xlsx');

const { fstat } = require('fs');



router.get('/', (req, res) => {

// var items = ['test1', 'test2'];

filesuploaded = [];

fs.readdir(path.join('public', 'uploads'), function(err, files){
    if (err) throw err;
    files.forEach(function(file){
        filesuploaded.push(file)
    })
    
});

// console.log(items)


    res.render('selectfile', {
        title: 'Select File to use',
        items: filesuploaded
    });
    
    
  });



router.post('/', (req, res) => {
    let filename = req.body.filename;
   
    
    var workbook = XLSX.readFile(path.join('public', 'uploads', filename));
    var sheet_name_list = workbook.SheetNames;
    var xlText =  XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  
    cellvaluesarr = []
       
    for (i=0; i< xlText.length; i++) {

        cellvaluesarr.push(xlText[i]['Email'], 'email', i)

    }
    

  dbname = path.join('public', 'databases', os.hostname());

    let db = new sqlite3.Database(dbname, (err) => {

    
});

let sql = 'SELECT * FROM customers';

db.all(sql,  (err, rows) => {
    if (err) {
      throw err;
    }


    rows.forEach((row) => {
      console.log(row.phone);
    });

  
  





// close the database connection
db.close();

});





});

  module.exports= router;