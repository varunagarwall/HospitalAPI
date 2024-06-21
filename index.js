// hospital-api
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8000;


const db = require('./config/mongoose');
// used for session cookie

const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');

app.use(express.urlencoded());
app.use(express.json())



app.use(cookieParser());


app.set('view engine', 'ejs');
app.set('views', './views');



//mongo


app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});

