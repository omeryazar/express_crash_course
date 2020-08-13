
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
   
    db.get (  `SELECT * FROM customers where phone = ?`, 
    [phone], (err, row) => {
if (err) {

  return console.log(err.message);

}


  
  res.render('success', {
  
    title: 'Updated Data for Customer: ',
    first_name: row.first_name, 
    last_name: row.last_name,
    email: row.email, 
    phone: row.phone, 
    permitted: row.permitted
  })


 });



// close the database connection
db.close();

});


module.exports= router;