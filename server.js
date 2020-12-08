// Require modules
const express = require('express');
const port = process.env.PORT || 4000;
const morgan = require('morgan');
const session = require('express-session');
const methodOverride = require('method-override');
const passport = require('passport');

require('dotenv').config();

// Create express app
const app = express();


// Connect to MongoDB with mongoose
require('./config/database');

// Connect to passport
require('./config/passport');

// Require routes
const indexRouter = require('./routes/index');
const memoriesRouter = require('./routes/memories');

// Configure server settings - app.set()
app.set('view engine', 'ejs');


// mount middleware - app.use()
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));

// Add session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

// Add passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Mount routes
app.use('/', indexRouter);
app.use('/memories', memoriesRouter);


// Tell app to listen
app.listen(port, () => {
    console.log(`Express is listeing on port: ${port}`);
});