const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars');
const members = require('./Members');

const bodyParser = require('body-parser');
const healthRoutes = require('./routes/health-route');
const swaggerRoutes = require('./routes/swagger-route');


// const logger = require('./middleware/logger');


const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use('/health', healthRoutes);
app.use('/swagger', swaggerRoutes);

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
app.use('/api/checkerrors', require('./routes/api/checkerrors'));
app.use('/api/deletecustomer', require('./routes/api/deletecustomer'));
app.use('/api/deletefromdb', require('./routes/api/deletefromdb'));
app.use('/api/optout', require('./routes/api/optout'));
app.use('/api/sendwhatsapp', require('./routes/api/sendwhatsapp'));


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App UI available http://localhost:${port}`);
    console.log(`Swagger UI available http://localhost:${port}/swagger/api-docs`);
});

// error handler for unmatched routes or api calls
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '../public', '404.html'));
});

module.exports = app;