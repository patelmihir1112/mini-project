var Menu = require('../model/model');
const connectDB = require('../database/connection')

exports.FindItems = (req,res) =>{
    const Id = req.query.Id;
    const data = new Array(2);
    const Query = "select * from menulist where Menu_Id = "+Id;
    connectDB.query(Query,function(err,result,field){
        if(err){
            console.log("Error : retrive the data from menulist"+err);
            data[1] = 0;
        }
        else        
            data[0] = result;

        const Q = "select * from myorder";
        connectDB.query(Q,function(err,rows,field){
            if(err){
                console.log("Error : retrive the data from myorder"+err);
                data[1] = 0;
            }
            else
                data[1] = rows;
            res.send(data);
        })
        // res.send(data);
    });

}

exports.DeleteItem = (req,res) =>{
    var id = req.query.Id;
    const Query = "delete from myorder where Sr_No = "+id;
    connectDB.query(Query,function(err,result,field){
        if(err){
            console.log(`Error : When Deleting item`)
        }
        res.redirect('/DetailedMenu?Id=1');
    });

}

// exports.Order = (req,res) =>{
//     var result = req.query.Name;
//     var Price = req.query.Price;
//     console.log(result);
//     console.log(Price);


// }