const connectDB = require('../database/connection')

exports.FindItems = (req,res) =>{
    const Id = req.query.Id;
    const data = new Array(2);
    const Query = "select * from menulist where Menu_Id = "+Id;
    connectDB.query(Query,function(err,result,field){
        if(err){
            console.log("Error : retrive the data from menulist ==>"+err);
            data[1] = 0;
        }
        else        
            data[0] = result;

        const Q = "select * from myorder";
        connectDB.query(Q,function(err,rows,field){
            if(err){
                console.log("Error : retrive the data from myorder ==>"+err);
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
            console.log(`Error : When Deleting item for Id : ${id} ==>${err}`)
        }
        res.redirect('/DetailedMenu?Id=1');
    });

}

exports.Order = (req,res) =>{
     Id = req.query.Id;
     const Query = "select Name,Price from menulist where Id = "+Id;
    connectDB.query(Query,function(err,result,field){
        if(err){
            console.log("Error : retrive the data from menulist with Id :"+Id+" ==>"+err);
        }
        const Q = "select No_Of_Item from myorder where Price="+result[0].Price+" and Item='"+result[0].Name+"';";
        connectDB.query(Q,function(err,rows,field){
            if(err){
                console.log(`Error:While match the data from MyOrder table with Id:${Id} ==>${err}`)
            }else{
                if(rows.length)
                {
                    const Quantity = rows[0].No_Of_Item + 1;
                    const sql = `UPDATE myorder SET NO_OF_Item = ${Quantity} where Item = '${result[0].Name}' and Price = ${result[0].Price} `;
                    connectDB.query(sql,function(err,data,field){
                        if(err)
                            console.log("Error : while Update Quantity in MyOrde Table ==>"+err);
                        res.redirect('/DetailedMenu?Id=1');
                    })
                }else{
                    const InsQ = `insert into myorder (Item,No_Of_Item,Price) values('${result[0].Name}',${1},${result[0].Price})`;
                    connectDB.query(InsQ,function(err,record,field){
                        if(err)
                            console.log("Error : while Insert record in MyOrde Table ==>"+err);
                        // res.redirect('/DetailedMenu?Id=1');
                    })
                    res.redirect('/DetailedMenu?Id=1');
                }
            }
        });
    });
}