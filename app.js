//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const ejs = require('ejs');
const connectDb = require('./config/db');
dotenv.config({ path: './config/config.env' });

const Port = 4000;
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

connectDb();

app.use('/', require('./routes/home'));
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login')); 

app.listen(Port, () => {
  console.log('Server started on port '+ Port);
});
