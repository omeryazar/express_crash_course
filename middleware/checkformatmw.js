const path = require('path');
const XLSX = require('xlsx');
const express = require('express');




//If file is Excel, try to parse

const checkformatmw = function (req, res, filename) {


  var workbook = XLSX.readFile(filename);
  var sheet_name_list = workbook.SheetNames;
  var xlData = workbook.Sheets[sheet_name_list[0]];


  // console.log( xlData['A1'].v);
  // console.log( xlData['B1'].v);
  // console.log( xlData['C1'].v);
  // console.log( xlData['D1'].v);
  // console.log( xlData['E1'].v);
  // console.log( xlData['F1'].v);

  if (
    xlData['A1'].v == 'FirstName' &&
    xlData['B1'].v == 'LastName' &&
    xlData['C1'].v == 'Email' &&
    xlData['D1'].v == 'Phone' &&
    xlData['E1'].v == 'Permitted' &&
    xlData['F1'].v == 'Segment'


  ) {
    return true;
  } else {
    res.render('failed', {
      message: `Format of uploaded file ${filename} is not correct, please use the template`
    })

  }


};




module.exports = checkformatmw;