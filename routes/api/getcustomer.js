
const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3')
const fs = require('fs');
const path = require('path')


//Initial response
router.get('/', (req, res) => {

    const directoryPath = path.join(__dirname, 'databases');

    fs.readdir(directoryPath, function (err, files) {
            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            } 

        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file); 
        })

        });

    
    res.render('getcustomer', {
        title: 'Create Customer'
    });
    
});





module.exports = router;



