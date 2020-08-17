
const path = require('path');
const XLSX = require('xlsx');
const express = require('express');
const checkmissingvalues = require('./checkmissingvalues');



//If file is Excel, try to parse

const checkformat = function (req, res, filename) {

  var workbook = XLSX.readFile(filename);
  var sheet_name_list = workbook.SheetNames;
  var xlData = workbook.Sheets[sheet_name_list[0]];

//Check columns


try {

if (
    xlData['A1'].v == 'FirstName' &&
    xlData['B1'].v == 'LastName' &&
    xlData['C1'].v == 'Email' &&
    xlData['D1'].v == 'Phone' &&
    xlData['E1'].v == 'Permitted' &&
    xlData['F1'].v == 'Segment'
    
    
    )  {

            checkmissingvalues(req, res, filename);
        // res.render('done', {
        //     message: `Uploaded file ${filename} has the correct format`
        // })
    } else {
        res.render('failed', {
            message: `Format of uploaded file ${filename} is not correct, please use the template`
        })

    }
} catch (err) {

    res.render ('failed', {
        message: `Format of uploaded file ${filename} is not correct, please use the template`
    })
}


};


  
  
  module.exports= checkformat;