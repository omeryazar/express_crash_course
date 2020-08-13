
const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const path = require('path');
const os = require('os');
const formidable = require('formidable');
const fs = require ('fs');



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
      res.write('File uploaded and moved!');
      res.end();
    
  });
});
});

  
module.exports= router;