const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection(
    {
        user:"root",
        host:"localhost",
        password:"password",
        database:"Register"
    }
)

app.post("/register" , (req , res) => {

    const username = req.body.username;
    const email = req.body.email;
    const mobileNo = req.body.mobileNo;
    const password = req.body.password;
    

    db.query("INSERT INTO users (username , email , mobile_no , password) VALUES (? , ? , ? , ? )" , [username , email , mobileNo , password] , (err , result)=>{
        console.log(err);
    })
})

app.post("/login" , (req , res) =>{

    const email = req.body.email;
    const password = req.body.password;
    

    db.query("SELECT * FROM users WHERE email = ? AND password = ?" , [ email , password] , (err , result)=>{
        if(err){
            res.send({err : err});
        }
        
        if(result.length > 0){
            res.send(result);
        }else{
            res.send({message : "Wrong Email And Password"});
        }
    })
})


app.listen(3001 , ()=>{
    console.log("Running Server");
})