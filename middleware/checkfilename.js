
const path = require('path');
const XLSX = require('xlsx');
const express = require('express');
const checkformat = require('./checkformat');


//Excel file must be protected so that arbitrary formats are not received

//Check file name
 const checkfilename = function(req, res, filename) {
  allowedfiletypes = ['.xls', '.xlsx', '.XLS', '.XLSX'];
  extension = path.extname(filename);

  if (allowedfiletypes.indexOf(extension) > -1) {

    
    checkformat(req, res, filename);

  } else {

     res.render('failed', {
     message: `The selected filetype ${extension} is not Excel`
  });

  }
  
  
 };
  
  
  module.exports= checkfilename;