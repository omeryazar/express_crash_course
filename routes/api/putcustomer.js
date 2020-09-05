
const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const path = require('path');
const os = require('os');

// Add customer to database


router.post('/', (req, res) => {
 

 let first_name = req.body.first_name;
 let last_name = req.body.last_name;
 let email = req.body.email;
 let phone = req.body.phone;
 let permitted = req.body.permitted;

 
 dbname = path.join('public', 'databases', os.hostname());
 

    let db = new sqlite3.Database(dbname, (err) => {});


db.run (  `INSERT INTO customers(first_name, last_name, email, phone, permitted) VALUES(?,?,?,?,?)`, 
          [first_name, last_name, email, phone, permitted], function(err, row) {
    if (err) {
 
      res.render('failed', {
        message: `Database error: ${err}`
      })
    }
 
    console.log(`A row has been inserted with rowid ${this.lastID}`);
    res.render('success', {

      title: 'Customer created:',
      first_name, 
      last_name, 
      email: email, 
      phone: phone, 
      permitted: permitted

    }
    
    )
  });

  // close the database connection
  db.close();

});


module.exports= router;