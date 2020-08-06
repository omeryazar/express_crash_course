
const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const path = require('path');
const os = require('os');

// Add customer to database



//Initial response
router.get('/', (req, res) => {
  res.render('findcustomer', {
      title: 'Select Customer to Edit'
  });
  
});

router.post('/', (req, res) => {
  let phone = req.body.phone;
 
  
 //WATCH OUT - HARDCODED DB NAME
 dbname = path.join('public', 'databases', os.hostname());
 //dbname = path.join('../../databases', 'test2');

    let db = new sqlite3.Database(dbname, (err) => {});


    let sql =    `SELECT *      
                  FROM customers
                  WHERE phone  = ?`;

db.get (sql, [phone], function(err, row) {
    if (err) {
      //return console.log(err.message);
      res.send (err.message);
    }
    // get the last insert id
    console.log(`A customer has been FOUND with phone number:  ${phone}`);
    
    return row
    ? res.render('success', {
      first_name: row.first_name, 
      last_name: row.last_name, 
      email: row.email, 
      phone: row.phone, 
      permited: row.permitted


    }
    )
    
    //console.log(row.first_name)
      
    //: console.log(`No cutomer found with phone number:  ${phone}`);
    : res.render('notfound', {
      phone

    })
   
  });
   // close the database connection
   db.close();
   
 });
 

module.exports= router;