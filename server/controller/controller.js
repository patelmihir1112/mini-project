var Menu = require('../model/model');
const connectDB = require('../database/connection')

exports.FindItems = (req,res) =>{
    const Id = req.query.Id;
    const Query = "select * from menulist where Menu_Id = "+Id;
    connectDB.query(Query,function(err,result,field){
        if(err)
            console.log("Error : retrive the data from menulist"+err);
        res.send(result);
    });

}