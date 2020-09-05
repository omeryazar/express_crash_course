const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const path = require('path');
const os = require('os');
const {
  lastIndexOf
} = require('../../Members');

// Add customer to database
router.post('/', (req, res) => {


  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email = req.body.email;
  let phone = req.body.phone;
  let permitted = req.body.permitted;
  let segment = req.body.segment;

  dbname = path.join('public', 'databases', os.hostname());

  let db = new sqlite3.Database(dbname, (err) => {});

  db.get(`UPDATE customers SET  first_name = ?,
                                last_name = ?,
                                email = ?,
                                permitted = ?,
                                segment = ?
    
  where phone = ?`,
    [first_name, last_name, email, permitted, segment, phone], (err, row) => {
      if (err) {

        console.log(err.message);
        res.render('failed', {
          message: `Database error: ${err}`
        })

      }



      res.render('success', {

        title: 'Updated Data for Customer: ',
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        permitted: permitted,
        segment: segment
      })


    });



  // close the database connection
  db.close();

});


module.exports = router;