const path = require('path');
const os = require('os');
const sqlite3 = require('sqlite3')

const addtodatabasemw = require('./addtodatabasemw')

const checkduplicatesmw = function (req, res, xlText) {

    dbphonelist = [];
    xlphonelist = [];
    intersection = [];


    dbname = path.join('public', 'databases', os.hostname());
    let db = new sqlite3.Database(dbname, (err) => {});

    let sql = 'SELECT * FROM customers';

    db.all(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        for (i = 0; i < rows.length; i++) {


            dbphonelist.push(rows[i].phone)


        }
        // console.log(dbphonelist);

        for (i = 0; i < xlText.length; i++) {

            xlphonelist.push(xlText[i]['Phone'].toString());

        }


        // console.log(xlphonelist);


        // console.log(dbphonelist);


        intersection = xlphonelist.filter(x => dbphonelist.includes(x));
        // console.log('intersection from mw')
        // console.log(intersection);
        // console.log(intersection.length);
        // return intersection;

        if (intersection.length > 0) {

            console.log('Duplicates found' + intersection);
            res.render('failed', {
                message: `The selected file has duplicates`
            });
            return false;
        } else {

            console.log('No duplicates');
            addtodatabasemw(req, res, xlText)
        }


    });






}



module.exports = checkduplicatesmw;