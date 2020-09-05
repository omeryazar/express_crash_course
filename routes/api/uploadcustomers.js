const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars');
const path = require('path');
const os = require('os');
const formidable = require('formidable');
const fs = require('fs');
// const checkfilenamemw = require('../../middleware/checkfilenamemw');



//Initial response
router.get('/', (req, res) => {
  res.render('uploadcustomers', {
    title: 'Upload Customer File'
  });

});


router.post('/', function (req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {

    if (files.filetoupload.size == 0) {
      res.render('failed', {
        message: 'Please select a file to upload!'
      })
    } else {


      var oldpath = files.filetoupload.path;
      var filename = path.join('public', 'uploads', files.filetoupload.name);

      res.render('nextaction', {
        message: 'Check Errors',
        nextaction: 'checkerrors',
        nextactiontext: 'check all errors',
        filename: filename
      });
    }

  })

})
module.exports = router;

//     if (!checkfilenamemw(req, res, filename)) {

//       res.render('failed', {
//         message: `The selected filetype ${extension} is not Excel`
//       });
//       console.log('Extension failure')
//     } else {


//       console.log(`The selected filetype ${extension} is Excel`)

//       fs.rename(oldpath, filename, function (err) {
//         if (err) throw err;

//       });

//       res.render('nextaction', {
//         message: 'Check Errors',
//         nextaction: 'checkerrors',
//         nextactiontext: 'check all errors',
//         filename: filename
//       });


//     }

//   }
// });

// });