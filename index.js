const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars');
const members = require('./Members');

const logger = require('./middleware/logger');


const app = express();

//Init middleware
//app.use(logger);


// Handlebars Middleware

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Homepage route

app.get('/', (req, res) => res.render('index', {
    title: 'Marketing App',
    members

}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));

app.use('/api/members',require ('./routes/api/members'));
app.use('/api/getdbname',require ('./routes/api/getdbname'));
app.use('/api/putdb',require ('./routes/api/putdb'));
app.use('/api/getcustomer',require ('./routes/api/getcustomer'));
app.use('/api/putcustomer',require ('./routes/api/putcustomer'));
app.use('/api/editcustomer',require ('./routes/api/editcustomer'));
app.use('/api/updatecustomer',require ('./routes/api/updatecustomer'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


