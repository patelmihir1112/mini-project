var Menu = require('../model/model');
const connectDB = require('../database/connection')

exports.Menu = (req,res) =>{
    connectDB.query("SELECT * FROM menu", function (err, result, fields) {
        if (err) 
            console.log("Error : retrive the data from menu");
            res.render('Menu', { title:"Menu", result: result});
      });
    
}
exports.FindMenu = (req,res) =>{
    const Id = req.params.Id;
    const Query = "select * from menulist where Menu_Id = "+Id;
    connectDB.query(Query,function(err,result,field){
        if(err)
            console.log("Error : retrive the data from menulist"+err);
         res.render("DetailedMenu",{title:"Detailed Menu",result:result});
        //  res.redirect('/DetailedMenu');
        // return result;
    });

}
// exports.DetailedMenu = (req,res) =>{
    
// }
// exports.DetailedMenu = (req,res) =>{
    
// }
// exports.MyOrder = (req,res) =>{
    
// }

// exports.create = (req,res)=>{
//     if(!req.body){
//         res.status(400).send({message:'content can not be empty'});
//         return;
//     }

//     const menu = new Menu({
//         ItemName:req.body.ItemName,
//         ImagePath:req.body.ImagePath
//     })

//     Menu
//     .save(menu)
//     .then(data=>{res.send(data)})
//     .catch(err=>{res.status(500).send({message:err.message || 'some error while creatingn'});});

// }