 const express = require('express');
 const path = require('path')
 const fs = require('fs');

// let mmm = `INSERT INTO customers (first_name, last_name, email, phone, permitted) VALUES (`;
// let first_name = 'n1'
// let last_name = 'n2'

// let yyy = first_name + ', ' + last_name;

//         //first_name +`, ` + last_name;
//         //', 'email', 'phone', 'permitted'];
        

// let myway = path.join(__dirname, 'databases', first_name);

const directoryPath = path.join(__dirname, 'databases');


//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});