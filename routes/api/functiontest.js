const path = require('path');
const formidable = require('formidable');
const fs = require ('fs');
var XLSX = require('xlsx')

const express = require('express');
const router = express.Router();




router.post('/', (req, res) => {

    dbname = path.join('public', 'databases', os.hostname());
    

console.log('here')



var excelfile = path.join('public', 'uploads', 'Book3.xlsx');
var workbook = XLSX.readFile(excelfile);
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);


});


module.exports= router;

