
const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const path = require('path');
const os = require('os');
const formidable = require('formidable');
const fs = require ('fs');
const checkfilename = require('../../middleware/checkfilename');
const checkformat = require('../../middleware/checkformat');



//Initial response
router.get('/', (req, res) => {
  res.render('uploadcustomers', {
      title: 'Upload Customer File'
  });
  
});


 router.post('/', function(req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {

    var oldpath = files.filetoupload.path;
    var newpath = path.join('public', 'uploads', files.filetoupload.name);
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
    });
        
    var messages = [];

    checkfilename(req, res, newpath);
    //  checkformat(req, res, newpath);
   
});
});

  
module.exports= router;