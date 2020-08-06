
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
   
    //Warning OUT - HARDCODED DB NAME
    dbname = path.join('public', 'databases', os.hostname());
    //dbname = path.join('../../databases', 'test2');
   
       let db = new sqlite3.Database(dbname, (err) => {});
   
   
   
   db.run (  `INSERT INTO customers(first_name, last_name, email, phone, permitted) VALUES(?,?,?,?,?)`, 
             [first_name, last_name, email, phone, permitted], function(err, row) {
       if (err) {
         //return console.log(err.message);
         res.send (err.message);
       }
       // get the last insert id
       console.log(`A row has been inserted with rowid ${this.lastID}`);
       res.render('success', {
   
         title: 'Customer created:',
         first_name, 
         last_name, 
         email, 
         phone, 
         permitted
   
       }
       
       )
     });
   
     // close the database connection
     db.close();
   
   });
   


module.exports = router;



