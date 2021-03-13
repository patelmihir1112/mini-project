const axios = require('axios');
const connectDB = require('../database/connection')
// Requiring the module 
const reader = require('xlsx') 
const data = [];
// Reading our file 
const file = reader.readFile('E:/freelancer/mini-project/my.xlsx') 

exports.homeRoutes = (req,res)=> {
    res.render('Home',{title:"Home Page"});
}

exports.Menu = (req,res)=>{
    connectDB.query("SELECT * FROM menu", function (err, result, fields) {
        if (err) 
            console.log("Error : retrive the data from menu");
            res.render('Menu', { title:"Menu", result: result});
      });
}

exports.DetailedMenu = (req,res)=>{
    axios.get('http://localhost:3000/FindItems',{ params : { Id : req.query.Id }})
    .then(function(response){
        res.render('FindItems', { title:"Detailed Menu",result : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.OurStores = (req,res)=>{
  
 
const sheets = file.SheetNames
    for(let i = 0; i < sheets.length; i++) 
    { 
       const temp = reader.utils.sheet_to_json( 
            file.Sheets[file.SheetNames[i]]) 
       temp.forEach((res) => { 
          data.push(res) 
       }) 
    } 
    var arr=[];
    var i=0;
    for(key in data)
    {
        for(inner_key in data[key])
        {

            arr[i] = data[key][inner_key];
            i++;
        }

    }
    
    
    res.render('OurStores',{title:"Our Stores" ,result : arr });
}

exports.Contact = (req,res)=>{
    res.render('Contact');
}