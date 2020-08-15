
const path = require('path');


const checkfilename = function(filename) {

    allowedfiletypes = ['.xls', '.xlsx', '.XLS', '.XLSX'];
  
  extension = path.extname(filename);
  if (allowedfiletypes.indexOf(extension) > -1) {
  
    return(true);
    console.log('OK');
  } else {
    return(false);
    console.log('Not OK');
  }
  
  
  }
  
  module.exports= checkfilename;