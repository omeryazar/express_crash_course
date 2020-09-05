const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars');
const members = require('./Members');


// const logger = require('./middleware/logger');


const app = express();

//Init middleware
//app.use(logger);


// Handlebars Middleware

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


// Homepage route

app.get('/', (req, res) => res.render('index', {
    title: 'Marketing App',
    members

}));

app.use(express.static(path.join(__dirname, 'public')));
app.use("/images", express.static(path.join(__dirname, 'public', 'images')))



app.use('/api/members', require('./routes/api/members'));
app.use('/api/createdb', require('./routes/api/createdb'));
app.use('/api/createcustomer', require('./routes/api/createcustomer'));
app.use('/api/editcustomer', require('./routes/api/editcustomer'));
app.use('/api/updatecustomer', require('./routes/api/updatecustomer'));
app.use('/api/listallcustomers', require('./routes/api/listallcustomers'));
app.use('/api/readexcel', require('./routes/api/readexcel'));
app.use('/api/uploadcustomers', require('./routes/api/uploadcustomers'));
app.use('/api/functiontest', require('./routes/api/functiontest'));
app.use('/api/checkformat', require('./routes/api/checkformat'));
app.use('/api/checkmissingvalues', require('./routes/api/checkmissingvalues'));
app.use('/api/checkduplicates', require('./routes/api/checkduplicates'));
app.use('/api/addtodatabase', require('./routes/api/addtodatabase'));
app.use('/api/checkerrors', require('./routes/api/checkerrors'));


const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//Check missing columns


//Check missing cells

//Check mail format



//Check phone numbers

//Check duplitaes (omit sample line)


//Upload file (omit sample line)

// var phone = [100, 200, 300];
// var id = [1, 2, 3]

// var objects = {};

// for (var x = 0; x < phone.length; x++) {
//     objects = {
//         phone: phone[x],
//         id: id[x]
//     };
// }
// console.log(objects)



// const fs = require('fs');

// const os = require('os');
// const sqlite3 = require('sqlite3')


// dbname = path.join('public', 'databases', os.hostname());
// let db = new sqlite3.Database(dbname, (err) => {});


// dbphonelist = [];


// let sql = 'SELECT * FROM customers';

// db.all(sql, (err, rows) => {
//         if (err) {
//             throw err;
//         }
//         // console.log(rows)
//         // console.log(Object.keys(rows))
//     }

// )

// xlText = {}

// filename = path.join('public', 'uploads', 'Book3.xlsx');


// const XLSX = require('xlsx');
// var workbook = XLSX.readFile(filename);
// var sheet_name_list = workbook.SheetNames;
// var xlText = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

// console.log(xlText)

// console.log(xlText[0]['FirstName'])
// console.log(Object.keys(xlText))

// words = xlText[0];
// console.log(words)


//Check e-mail addresses

//extract e-mail values and keys into an object


//check @ sign in all values


// for (i = 0; i < xlText.length; i++) {
//     c = (xlText[i].Email)

//     if (c.includes('@') == true) {
//         console.log(c, 'var')
//     } else {
//         console.log(c, 'yok')
//     }

// }

// mailvar = xlText.filter(mailvar => !mailvar.Email.includes('@'))

// console.log(mailvar)

// test = [{
//     FirstName: 'Holmes',
//     LastName: 'Branch',
//     Email: 'ahmet@ahmetyilmaz.com',
//     Phone: 5594314700,
//     Permitted: 'N',
//     Segment: 'C'
// }, {
//     FirstName: 'Zoe',
//     LastName: 'Cannon',
//     Email: 'ahmet@ahmetyilmaz.com',
//     Phone: 5478668437,
//     Permitted: 'N',
//     Segment: 'D'
// }]

// const XLSX = require("xlsx");
// filename = path.join('public', 'uploads', 'Book3.xlsx');
// workbook = XLSX.readFile(filename);
// sheet_name_list = workbook.SheetNames;
// xlText = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

// console.log(xlText.length)


// for (i = 0; i < xlText.length; i++) {

//     a = xlText[i].Phone.toString();
//     console.log(a.startsWith('5'))


// }

// console.log(xlText[99].Phone)



// function check5(phonenumber) {
//     return phonenumber.startsWith(5)
// }


// mailvar = xlText.filter(check5())