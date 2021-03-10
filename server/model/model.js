const mysql = require('mysql');
const connectDB = require('../database/connection')

// connectDB.query("SELECT * FROM menu", function (err, result, fields) {
//     if (err) 
//         console.log("Error");
//     console.log(result[0]);
//   });

// var schema = new mysql.schema({
//     ItemName:{
//         type:String,
//         required:true
//     },ImagePath:{
//         type:String,
//         required:true
//     }
// });

// const MenuModel = mysql.model('menu',schema);

// module.exports = MenuModel;