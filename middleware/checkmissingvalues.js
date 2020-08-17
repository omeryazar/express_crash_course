const path = require('path');
const XLSX = require('xlsx');
const express = require('express');



// Check for missing data



const checkmissingvalues = function (req, res, filename) {

    

    var workbook = XLSX.readFile(filename);
    var sheet_name_list = workbook.SheetNames;
    var xlText =  XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  
    
        cellstatus = [];

        //Move to first name
        cellvaluesarr = []
       
        for (i=0; i< xlText.length; i++) {

            cellvaluesarr.push(xlText[i]['FirstName'], 'firstname', i)
            cellvaluesarr.push(xlText[i]['LastName'], 'lastname', i)
            cellvaluesarr.push(xlText[i]['Email'], 'email', i)
            cellvaluesarr.push(xlText[i]['Phone'], 'phone', i)
            cellvaluesarr.push(xlText[i]['Permitted'], 'permitted', i)
            cellvaluesarr.push(xlText[i]['Segment'], 'segment', i)


        }

        
        
        if  (cellvaluesarr.indexOf(undefined) > -1) {
        
        res.render('failed', {

            message: `Some rows have missing values, please check`
        })
       

    } else {
        res.render('copytodatabase', {
            title: 'Excel data is correct'
        })
        
        
        
    };
  
    }
    
    
    module.exports= checkmissingvalues;







   //Check for missing data
   