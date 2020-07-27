const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')


//Initial response
router.get('/', (req, res) => {
    res.render('getdbname', {
        title: 'Create Database'
    });
    
});





module.exports = router;


