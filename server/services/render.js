const axios = require('axios');

exports.homeRoutes = (req,res)=> {
    res.render('Home',{title:"Home Page"});
}

// exports.Menu = (req,res)=>{
//     res.render('Menu',{title:"Menu"});
// }

exports.FindMenu = (req,res)=>{
    axios.get('http://localhost:3000/Menu',{ params : { Id : req.query.Id }})
    .then(function(res){
        console.log(Id);
        const Query = "select * from menulist where Menu_Id = "+Id;
        connectDB.query(Query,function(err,result,field){
            if(err)
                console.log("Error : retrive the data from menulist"+err);
             res.render("DetailedMenu",{title:"Detailed Menu",result:result});
        });
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

exports.DetailedMenu = (req,res)=>{
    res.render('DetailedMenu',{title:"Detailed Menu"});
}