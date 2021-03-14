const mysql = require('mysql');

const connectDB = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mini-project',
    port:'3306'
});

connectDB.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
    console.log('Connected to the MySQL server.');
  });


module.exports = connectDB