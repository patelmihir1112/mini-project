const axios = require('axios');
const connectDB = require('../database/connection')

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
    res.render('OurStores',{title:"Our Stores"});
}

exports.Contact = (req,res)=>{
    res.render('Contact');
}