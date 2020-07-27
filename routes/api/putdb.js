
const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const path = require('path')

// Create database
router.post('/', (req, res) => {
    
    dbname = path.join(__dirname, 'databases', req.body.name);

    let db = new sqlite3.Database(dbname, (err) => {
    if (err) {
        res.send('Error when creating the database', err)
    } else {
      //  res.render('databasecreated', {
      
      //      
      res.render('databasecreated', {
        title2: 'Database created' ,   
        dbname: (req.body.name)  
      });
        }
            
    })


    let sql = `CREATE TABLE IF NOT EXISTS customers (
        contact_id INTEGER PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone TEXT NOT NULL UNIQUE,
        permitted TEXT NOT NULL 
    )`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
    })

});

module.exports= router;