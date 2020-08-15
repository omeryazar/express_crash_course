

const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const path = require('path');
const os = require('os');
// const { use } = require('./uploadcustomers');




//const { throws } = require('assert');

//Yedek kod
// var XLSX = require('xlsx')
// var excelfile = path.join('public', 'uploads', 'Book3.xlsx');
// var workbook = XLSX.readFile(excelfile);
// var sheet_name_list = workbook.SheetNames;
// var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
// console.log(xlData);



// var XLSX = require('xlsx');
// const { ftruncateSync } = require('fs');


// var excelfile = path.join('public', 'uploads', 'excelxls.xls');
// console.log(path.extname(excelfile));


// var workbook = XLSX.readFile(excelfile);
// var sheet_name_list = workbook.SheetNames;
// var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
// console.log(xlData);





// router.post('/', (req, res) => {

//     dbname = path.join('public', 'databases', os.hostname());
    


 
 
// let db = new sqlite3.Database(dbname, (err) => {

    
// });

// let sql = 'SELECT * FROM customers';

// db.all(sql,  (err, rows) => {
//     if (err) {
//       throw err;
//     }

//     res.render('listallcustomers', {
//         title: 'List of Customers',
//         rows
//     });

//     rows.forEach((row) => {
//       console.log(row.first_name);
//     });

//   });
  
// // console.log(`No customer found with phone ${phone}`);
// //  });





// // close the database connection
// db.close();

// });

module.exports= router;

