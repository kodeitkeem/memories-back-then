// Require modules
const express = require('express');
const port = process.env.PORT || 4000;
const morgan = require('morgan');
const session = require('express-session');
const methodOverride = require('method-override');
const passport = require('passport');

require('dotenv').config();

// Create express app
const express = express();


// Connect to MongoDB with mongoose


// Require routes


// Configure server settings - app.set()
app.set('view-engine', 'ejs');


// mount middleware - app.use()

// Add session middleware

// Add passport middleware

// Mount routes

// Tell app to listen
app.listen(port, () => {
    console.log(`Express is listeing on port: ${port}`);
});