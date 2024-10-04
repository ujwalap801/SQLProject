const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app =express();
const port =8080;
const path= require("path");
const exp = require('constants');

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

// app.use(express.static(__dirname,"public"));
// app.use(express.json({exte}))
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'deleta_app',
    password: 'Ujwala@2728'
});


let getRandomUser = () => {
    return [
        faker.string.uuid(),
         faker.internet.userName(),
        faker.internet.email(),
         faker.internet.password(),
    ]
};


app.get("/",(req,res)=>
    {
        let q = 'SELECT COUNT(*) FROM user';
   
        try{
            connection.query(q,(err,result)=>
            {
                if(err)
                {
                    console.log(err);
                }else{

                let count =result[0]["COUNT(*)"];
                res.render("home.ejs",{count});
                }
            });
        }catch(err)
        {
            console.log(err);
        }
    });

// SHOW ROUTE
app.get("/users",(req,res)=>
{
    let q = 'SELECT * FROM user';
        try{
            connection.query(q,(err,result)=>
            {
                if(err)
                {
                    console.log(err);
                }else{
                //  console.log(result);
                res.render("show");
                }
            });
        }catch(err)
        {
            console.log(err);
        }
    res.send("sucess");
});


let q ="INSERT INTO user(id,username,email,password) VALUES ?";

let data =[];
for(let i=1;i<=100;i++)
{
   data.push(getRandomUser()); //100 fake data
}


// // Connect to the database
// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }

//     console.log('Connected to the database');

//     //CONNECTING Data ARRAY TO DATABASE
//     connection.query(q,[data], (err, result) => {
//         if (err) {
//             console.error('Error executing query:', err);
//         } else {
//             console.log('Tables in the database:', result);
//             console.log(result);
//         }

//         // Close the connection after the query
//         connection.end();
//     });
    
// });



app.listen(port,(req,res)=>
{
    console.log(`listening to ${port}`);
})