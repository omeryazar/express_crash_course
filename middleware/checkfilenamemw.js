
const path = require('path');
const XLSX = require('xlsx');
const express = require('express');



//Excel file must be protected so that arbitrary formats are not received

//Check file name
 const checkfilenamemw = function(filename) {


  allowedfiletypes = ['.xls', '.xlsx', '.XLS', '.XLSX'];
  extension = path.extname(filename);

  if (allowedfiletypes.indexOf(extension) > -1) {
  

    console.log (`File  ${filename} can be processed, moving on to checkformat function`)
    return true

  } else {

     res.render('failed', {
     message: `The selected filetype ${extension} is not Excel`
  });
    console.log('Extension failure')
  }
  
  
 };
  
  
  module.exports= checkfilenamemw;