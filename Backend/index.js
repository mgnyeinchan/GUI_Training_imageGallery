const express = require("express"); 
var mysql = require('mysql'); 
const app = express(); 
const router = express.Router(); 
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({extended:true})); 
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/',(req,res)=>{ 
    res.send("User ");
}); 
app.get("/getAllShops",(req,res)=>{
    let connection = mysql.createConnection({
            host: 'localhost',
            user: 'nc',
            password: '123456',
            database: 'mydatabase'
    });
    connection.connect(function(err) {
        if(err) throw err;
        console.log('Connected to the MySQL server.');
        var sql = "select * from tbl_shop";
        connection.query(sql,function(err,result){
            res.send(result)
            if(err) throw err;
            console.log("ok");
        });
    })
});
app.post('/insert',async function(req,res,next){ 
    var name = req.body.name;
    var address = req.body.address;
    var phone = req.body.phone;
    var bio = req.body.bio;
    var image = req.body.image;

    console.log("Data : "+
        name+" , "+
        address+" , "+
        phone+" , "+
        bio+" , "+
        image
    )
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'nc',
        password: '123456',
        database: 'mydatabase'
    });
    connection.connect(function(err) {
        if(err) throw err;
        console.log('Connected to the MySQL server.');
        var sql = "insert into tbl_shop(name,address,phone,bio,image) value('"+name+"','"+address+"',"+phone+",'"+bio+"','"+image+"')";
        console.log("query : "+sql);
        connection.query(sql,function(err,result){
            res.send("Inserted")
            if(err) throw err;
            console.log("1 record inserted");
        });
    });
}); 
app.post('/update/:id',async function(req,res,next){ 
    var id = req.params.id;
    var name = req.body.name;
    var address = req.body.address;
    var phone = req.body.phone;
    var bio = req.body.bio;
    var image = req.body.image;
    console.log(
        "id = "+id+" , "+
        "name = "+name+" , "+
        "address = "+address+" , "+
        "phone = "+phone+" , "+
        "bio = "+bio+" , "+
        "image = "+image+" , "
    );
    
    
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'nc',
        password: '123456',
        database: 'mydatabase'
    });
    connection.connect(function(err) {
        if(err) throw err;
        console.log('Connected to the MySQL server.');
        var sql = "update tbl_shop set name = '"+name+"', address = '"+address+"',phone = "+phone+",bio = '"+bio+"',image = '"+image+"' where id = "+id;
        console.log(sql);
        connection.query(sql,function(err,result){
            res.send("Successfully Updated!")
            if(err) throw err;
            // console.log("1 record inserted");
        });
    })
}); 
app.delete('/delete',async function(req,res,next){ 
    var id = req.body.id;
    console.log("Delete id ");
    let connection = mysql.createConnection({
            host: 'localhost',
            user: 'nc',
            password: '123456',
            database: 'mydatabase'
    });
    connection.connect(function(err) {
        if(err) throw err;
        console.log('Connected to the MySQL server.');
        var sql = "delete from tbl_shop where id = "+id;
        connection.query(sql,function(err,result){
            res.send(result)
            if(err) throw err;
            console.log("ok");
        });
    })
}); 
app.listen(8000, function() { 
console.log("Server running at port 8000..."); 
}); 