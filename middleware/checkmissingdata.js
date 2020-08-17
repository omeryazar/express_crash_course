const path = require('path');
const XLSX = require('xlsx');
const express = require('express');
const { CONNREFUSED } = require('dns');
const { indexOf } = require('../Members');




// Check for missing data



const checkmissingdata = function (req, res, filename) {

    

    var workbook = XLSX.readFile(filename);
    var sheet_name_list = workbook.SheetNames;
    var xlText =  XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  
    
        cellstatus = [];

        //Move to first name
        firstnamearr = []
        xlText.forEach(row => firstnamearr.push(row['FirstName']));

        
        
        
        for (i =0; i < firstnamearr.length; i++) {


        if (firstnamearr[i] == undefined) {
           
            cellstatus.push('missing')    
            
                
            } else {
    
                cellstatus.push('found')    
                
            }
            
        }
        

     
        
    if  (cellstatus.indexOf('missing') > -1) {
        
        res.render('failed', {

            message: `Some first name rows have missing values, please check`
        })
       

    } else {
        res.send('done')
    };
//end of first name

     //Move to last name
 lastnamearr = []
 xlText.forEach(row => lastnamearr.push(row['LastName']));

 
 
 
 for (i =0; i < lastnamearr.length; i++) {


 if (lastnamearr[i] == undefined) {
    
     cellstatus.push('missing')    
     
         
     } else {

         cellstatus.push('found')    
         
     }
     
 }
 

 
if  (cellstatus.indexOf('missing') > -1) {
 
 res.render('failed', {

     message: `Some last name rows have missing values, please check`
 })
 

} else {
 res.send('done')
};

     //end of last name

    //Move to email
    emailarr = []
    xlText.forEach(row => emailarr.push(row['Email']));

    
    
    
    for (i =0; i < emailarr.length; i++) {


    if (emailarr[i] == undefined) {
       
        cellstatus.push('missing')    
        
            
        } else {

            cellstatus.push('found')    
            
        }
        
    }
    
 
    
if  (cellstatus.indexOf('missing') > -1) {
    
    res.render('failed', {

        message: `Some email rows have missing values, please check`
    })
    

} else {
    res.send('done')
};
//end of email

 //Move to phone
 phonearr = []
 xlText.forEach(row => phonearr.push(row['Phone']));

 
 for (i =0; i < lastnamearr.length; i++) {


 if (phonearr[i] == undefined) {
    
     cellstatus.push('missing')    
     // console.log('missing')
         
     } else {

         cellstatus.push('found')    
         // console.log('found')
     }
     
 }
 

 
if  (cellstatus.indexOf('missing') > -1) {
 
 res.render('failed', {

     message: `Some phone rows have missing values, please check`
 })
 

} else {
 res.send('done')
};

     //end of phone
        

//Move to permitted
permittedarr = []
xlText.forEach(row => permittedarr.push(row['Permitted']));


for (i =0; i < permittedarr.length; i++) {


if (permittedarr[i] == undefined) {
   
    cellstatus.push('missing')    
    // console.log('missing')
        
    } else {

        cellstatus.push('found')    
        // console.log('found')
    }
    
}



if  (cellstatus.indexOf('missing') > -1) {

res.render('failed', {

    message: `Some permitted rows have missing values, please check`
})


} else {
res.send('done')
};

    //end of permitted

    //Move to segment
 segmentarr = []
 xlText.forEach(row => segmentarr.push(row['Segment']));

 
 for (i =0; i < segmentarr.length; i++) {


 if (segmentarr[i] == undefined) {
    
     cellstatus.push('missing')    
     
         
     } else {

         cellstatus.push('found')    
         
     }
     
 }
 

 
if  (cellstatus.indexOf('missing') > -1) {
 
 res.render('failed', {

     message: `Some segment rows have missing values, please check`
 })
 

} else {
 res.send('done')
};

     //end of segment
        

       


    //     firstnamearr = [];
    //     lastnamearr = [];
    //     emailarr = [];
    //     phonearr = [];
    //     permittedarr = [];
    //     segmentarr = [];
        
        
       
     
    //     // xlText.forEach(row => lastnamearr.push(row['LastName']));
    //     // xlText.forEach(row => emailarr.push(row['Email']));
    //     // xlText.forEach(row => phonearr.push(row['Phone']));
    //     // xlText.forEach(row => permittedarr.push(row['Permitted']));
    //     // xlText.forEach(row => segmentarr.push(row['Segment']));
     
    //     // console.log(firstnamearr.length);
        
  
  
  
    }
    
    
    module.exports= checkmissingdata;







   //Check for missing data
   