
const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const fs = require('fs');
const path = require('path')
const os = require('os');


//Initial response
router.get('/', (req, res) => {

  
    
    res.render('createcustomer', {
        title: 'Create Customer'
    });
    
});



router.post('/', (req, res) => {
 

    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let phone = req.body.phone;
    let permitted = req.body.permitted;
    let segment = req.body.segment;
   
    
    dbname = path.join('public', 'databases', os.hostname());
    
   
       let db = new sqlite3.Database(dbname, (err) => {});
   
   
   
   let sql =   `INSERT INTO customers (first_name, last_name, email, phone, permitted, segment) VALUES 
   (?, ?, ?, ?, ?, ?)` ;

console.log(sql);

db.all(sql, [first_name, last_name, email, phone, permitted, segment], (err, rows) => {

  if (err) {
    res.render('failed', {
      message: `Database error: ${err}`
    })
  }
  console.log('inserted');
});


  let sql2 = `SELECT * FROM customers where phone = ?`;

  
db.each(sql2, [phone], (err, row) => {

  if (err) {
    res.render('failed', {
      message: `Database error: ${err}`
    })

    throw err;
  }
  console.log(row.first_name, row.last_name);
  res.render('success', {
   
         title: 'Customer created:',
         first_name, 
         last_name, 
         email, 
         phone, 
         permitted,
         segment
   
       });

        
      });
     // close the database connection
     db.close();
   
  
});


module.exports = router;

