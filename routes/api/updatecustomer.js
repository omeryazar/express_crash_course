
const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const path = require('path');

// Add customer to database
router.post('/', (req, res) => {
 

    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let phone = req.body.phone;
    let permitted = req.body.permitted;
   
    dbname = path.join(__dirname, 'databases', 'test2');
   
       let db = new sqlite3.Database(dbname, (err) => {});
   
   
       // let sql =    `SELECT *      
       // FROM customers
       // WHERE phone  = ?`;
   
   db.run (  `UPDATE customers SET first_name = ?, last_name = ?, email = ?, phone = ?, permitted = ? 
            WHERE phone = ?`, function(err) {
       if (err) {
         //return console.log(err.message);
         res.send (err.message);
       }
       // get the last insert id
       console.log('Customer with phone: ' + phone + ' was updated');
       res.render('success')
     });
   
     // close the database connection
     db.close();
   
   });
   
   
   module.exports= router;