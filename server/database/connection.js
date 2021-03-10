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



// const connectDB = async() => {
//     try{
//         //Mysql Connection
//         const con = await mysql.createConnection(process.env.connstr,{
//             useNewUrlParser:true,
//             useUnifiedTopology:true,
//             useFindAndModify:false,
//             useCreateIndex:true
//         })
       
//         console.log(`Mysql Connected : ${con.connect.host}`);
//     }catch(err){
//         console.log("Error "+err);
//         process.exit(1);
//     }
// }

module.exports = connectDB