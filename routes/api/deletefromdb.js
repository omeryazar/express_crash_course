const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const path = require('path');
const os = require('os');


// Delete customer from database
router.post('/', (req, res) => {

    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let phone = req.body.phone;
    let permitted = req.body.permitted;
    let segment = req.body.segment;

    dbname = path.join('public', 'databases', os.hostname());

    let db = new sqlite3.Database(dbname, (err) => {});

    db.run(`DELETE FROM customers WHERE  phone = ?`, [phone], (err, row) => {
        if (err) {

            console.log(err.message);
            res.render('failed', {
                message: `Database error: ${err}`
            })

        }



        res.render('success', {

            title: 'Deleted  Customer: ',
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