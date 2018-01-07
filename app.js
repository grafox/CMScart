let express = require('express');
let path = require('path');
const mongoose = require('mongoose');
let config = require('./config/database');
// Connect DB

mongoose.connect(config.database);
let db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('Connected to MongoDB')
});

//init app

let app = express();

//view engine setup

app.set('view',path.join(__dirname,'views'));
app.set('view engine','ejs');

// set public folder

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(reg,res)=>{
    res.send('working');
})

//start the server 

let port = 3000;
app.listen(port,()=> console.log('Server start on port'+port));

