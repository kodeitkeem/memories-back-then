const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/memories-back-then',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connect;

db.on('connected', function(){
    console.log(`Mongoose connected to:${db.host}:${db.port}`);
});

db.on('error', function(err){
    console.log(`Encountered and error: ${err.message}`);
});

