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
        var Sum = 0;
        for(var i=0;i < response.data[1].length;i++)
            Sum = Sum + (response.data[1][i].Price)*(response.data[1][i].No_Of_Item);
        res.render('FindItems', { title:"Detailed Menu",result : response.data,Total : Sum });
    })
    .catch(err =>{
        res.send(err);
    })
}

// exports.Order = (req,res)=>{
//     axios.get('http://localhost:3000/FindItems',{ params : { Id : req.query.Id }})
//     .then(function(response){
//         console.log(response.data[Id]+" Maulik");
//         // const Quary = `insert into myorder (Item,No_Of_Item,Price) values()`;
//         // connectDB.query(Quary,(err,result,field)=>{
//         //     if(err)
//         //          console.log("Error : Insert data int to MyOrder Table"+err);
//         //     res.render('MyOrder', { title:"Detailed Menu",result : response.data });
//         // })
//     })
//     .catch(err =>{
//         res.send(err);
//     })  
// }

exports.OurStores = (req,res)=>{
    res.render('OurStores',{title:"Our Stores"});
}

exports.ContactUs = (req,res)=>{
    res.render('ContactUs',{title:"Contact Us"});
}