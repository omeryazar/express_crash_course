
const XLSX = require('xlsx');

// var filename = './public/uploads/Book3.xlsx';

var filename;
const parseExcel = function(filename) {}

if (filename) {
    var workbook = XLSX.readFile(filename);
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    
    return(xlData);
    
    
};

console.log(xlData);



//Check uniqueness of e-mails and phone numbers in Excel



//Check duplication of of e-mails and phone numbers against database



module.exports= parseExcel;


//Hurda code



//    //Check for missing data
//    firstnamearr = [];
//    lastnamearr = [];
//    emailarr = [];
//    phonearr = [];
//    permittedarr = [];
//    segmentarr = [];
//   //  xlData.forEach(row => firstnamearr.push(row['First Name']));
//   //  xlData.forEach(row => lastnamearr.push(row['Last Name']));
//   //  xlData.forEach(row => emailarr.push(row['Email']));
//   //  xlData.forEach(row => phonearr.push(row['Phone']));
//   //  xlData.forEach(row => permittedarr.push(row['Permitted']));
//   //  xlData.forEach(row => segmentarr.push(row['Segment']));






// //res.send(xlData);
// //Check for duplicate phones

// var phonearr = []
// xlData.forEach(row => phonearr.push(row.Phone));
//     // console.log(phonearr);

//   // phonearr.forEach(num => console.log(num));
//   // phonearr.forEach(num => console.log(phonearr.indexOf(num), phonearr.lastIndexOf(num)));

//     function checkduplicates (array) {

//       for (i =0; i < array.length; i++) { 
//              duplicates = []
//       if (array.indexOf(array[i]) != array.lastIndexOf(array[i])) {
//         // console.log(array[i])
//         duplicates.push(array[i]);
  
//       }
//     }

//     if (duplicates.length == 0) {

//       console.log(`No duplicates in ${filename}`)

//     } else {

    

//     res.render('failed', {
//       message: `Duplicate numbers: ${duplicates.toString()}`

//       });

//     }
//     };

//     checkduplicates(phonearr);
  
//       // console.log(duplicates.toString())
//   } else {
   
//       res.render('failed', {
//         message: `File uploaded but ${extension} is wrong file type, please use xls or xlsx`
//      });
//   };
  
  