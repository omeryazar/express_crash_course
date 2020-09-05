const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const path = require('path');
const os = require('os');





//Initial response
router.get('/', (req, res) => {
  res.render('findcustomer', {
    title: 'Select Customer to Edit',
    next_action: '/api/editcustomer',
    next_action_name: 'Save Customer'
  });

});

router.post('/', (req, res) => {
  let phone = req.body.phone;



  dbname = path.join('public', 'databases', os.hostname());



  let db = new sqlite3.Database(dbname, (err) => {});


  db.get(`SELECT * FROM customers where phone = ?`,
    [phone],
    (err, row) => {
      if (err) {
        res.render("failed", {
          message: err.message
        });

        return console.log(err.message);

      }

      if (row === undefined) {

        res.render("failed", {
          message: `No customer with phone ${phone} found.`
        })
      } else {

        res.render('editcustomer', {

          title: 'Edit Customer:',
          first_name: row.first_name,
          last_name: row.last_name,
          email: row.email,
          phone: row.phone,
          permitted: row.permitted,
          segment: row.segment,
          next_action: 'updatecustomer',
          next_action_name: 'Update Customer'
        })

      }




      // close the database connection
      db.close();


    })
})




module.exports = router;