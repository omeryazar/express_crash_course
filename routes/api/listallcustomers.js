
const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const path = require('path');
const os = require('os');
const { throws } = require('assert');






router.get('/', (req, res) => {

    dbname = path.join('public', 'databases', os.hostname());
    


 
 
let db = new sqlite3.Database(dbname, (err) => {

    
});

let sql = 'SELECT * FROM customers';

db.all(sql,  (err, rows) => {
    if (err) {
      throw err;
    }

    res.render('listallcustomers', {
        title: 'List of Customers',
        rows
    });

    rows.forEach((row) => {
      console.log(row.first_name);
    });

  });
  
// console.log(`No customer found with phone ${phone}`);
//  });





// close the database connection
db.close();

});

module.exports= router;