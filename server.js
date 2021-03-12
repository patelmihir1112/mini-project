const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');
const bodyParser = require('body-parser');

const app = express();

dotenv.config({path:'config.env'})
const port = process.env.port || 8081

// log requests
app.use(morgan('tiny'));

//mysql connection
// connectDB();


//parse request to body-parser
app.use(express.urlencoded({extended:true}))
// app.use(bodyparser.json());

//set view engine
app.set("view engine","ejs")
// app.set("view",path.resolve(__dirname,"view/ejs"))

//load assets
app.use('/Css',express.static(path.resolve(__dirname,"assets/Css")))
app.use('/Img',express.static(path.resolve(__dirname,"assets/Img")))
app.use('/Js',express.static(path.resolve(__dirname,"assets/Js")))

//app routes
app.use('/',require('./server/routes/router'))

app.listen(port,()=> console.log(`server is running on http://localhost:${port}`));