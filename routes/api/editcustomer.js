
const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const path = require('path');

// Add customer to database



//Initial response
router.get('/', (req, res) => {
  res.render('findcustomer', {
      title: 'Select Customer to Edit'
  });
  
});

router.post('/', (req, res) => {
  let phone = req.body.phone;

 
  dbname = path.join(__dirname, 'databases', 'test2');
 
     let db = new sqlite3.Database(dbname, (err) => {});
 

     let sql =    `SELECT *      
                  FROM customers
                  WHERE phone  = ?`;


// first row only
db.get(sql, [phone], (err, row) => {
if (err) {
return console.error(err.message), 
res.render('notfound');
}
return row
? res.render('editcustomer', {
  title: 'Edit Customer',
  row

})

//console.log(row.first_name, row.last_name)
: res.render('notfound'); //console.log(`No customer found with phone ${phone}`);
  


});
   // close the database connection
   db.close();
   
 });
 

module.exports= router;