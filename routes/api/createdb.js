const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const path = require('path')
const os = require('os');


//Initial response
router.get('/', (req, res) => {
    res.render('createdatabase', {
        title: 'Create Database',
        dbname: os.hostname()
    });
    
});


// Create database
router.post('/', (req, res) => {
    

    //Warning: Using hostname as database name
    dbname = path.join('public', 'databases', os.hostname());
    
console.log(dbname);
    let db = new sqlite3.Database(dbname, (err) => {
    if (err) {
        res.send('Error when creating the database', err)
    } else {
      //  res.render('databasecreated', {
      


    let sql = `CREATE TABLE IF NOT EXISTS customers (
        contact_id INTEGER PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL UNIQUE,
        permitted TEXT NOT NULL ,
        segment TEXT NOT NULL
    )`;

    db.all(sql, (err, rows) => {
        if (err) {
            throw err;
        }
    })
      //      
      res.render('databasecreated', {
        title2: 'Database created' ,   
        dbname: (req.body.dbname)  
      });
        }
            
    })


});




module.exports = router;


