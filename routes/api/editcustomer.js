
const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const path = require('path');
const os = require('os');





//Initial response
router.get('/', (req, res) => {
  res.render('findcustomer', {
      title: 'Select Customer to Edit'
  });
  
});

router.post('/', (req, res) => {
  let phone = req.body.phone;
 
  
 
 dbname = path.join('public', 'databases', os.hostname());
 


    let db = new sqlite3.Database(dbname, (err) => {});

    
    db.get (  `SELECT * FROM customers where phone = ?`, 
    [phone], (err, row) => {
if (err) {

  return console.log(err.message);

}


  
  res.render('editcustomer', {
  
    title: 'Edit Customer:',
    first_name: row.first_name, 
    last_name: row.last_name,
    email: row.email, 
    phone: row.phone, 
    permitted: row.permitted
  })

// console.log(`No customer found with phone ${phone}`);
 });



// close the database connection
db.close();

});


module.exports= router;