const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
// const fs = require('fs')

const app = express();
app.use(cors());
app.use(express.json());

const pg = require('pg')

const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'bloodify',
    password: '123456',
    port: 5432,
})

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.post('/signup', async (req, res) => {

    try {
        const values = [
            req.body.name[0],
            req.body.email[0],
            req.body.password[0]
        ]
        const result = await db.query(
            'INSERT INTO login (name, email, password) VALUES ($1, $2, $3)',
            values
        );
        return res.json("Successfully user created.")
    } catch (err) {
        console.log(err);
        return res.sendStatus(500).json("Internal server error")
    }
})


app.post('/login', async (req, res) => {
    try {
        const result = await db.query(
            'SELECT email, password from login where email=$1', [req.body.email[0]]
        )
        if (result.rows.length == 0) {
            return res.status(401).json("Email ID Not Found")
        }
        const user = result.rows[0];

        if (user.password != req.body.password[0]) {
            return res.status(401).json("Unathourized")
        }
        return res.json(user)
    } catch (err) {
        console.log(err);
        return res.status(500).json("Internal server error")
    }

})

app.post('/requestauth', async (req, res) => {
    const reqname = req.body.value;
    try{
        console.log(reqname)
        const result = await db.query(
            `SELECT name from login where name = $1`, [reqname]
        )
        if (result.rows.length == 0){
            return res.status(401).json("Name Not Found")
        }
        const user = result.rows;

        if (user.reqname != req.body.reqname) {
            return res.status(401).json("Unathourized")
        }
        return res.json(user)
    }catch (err) {
        console.log(err);
        return res.status(500).json("Internal server error")
    }
}

)

// app.get('/addres', async (req, res) => {
//     try {
//         const result = await db.query(
//             'SELECT address from blood_data'
//         )
//         return res.json(result.rows);
//     } catch(err){
//         console.log(err);
//         return res.status(500).json("Internal server error")
//     }
// })

app.get('/request', async (req, res) => {
    const selectedOption = req.query.selectedOption;


    const location = req.query.location;

    try {
        console.log(selectedOption)
        
        const result = await db.query(
            `SELECT * from blood_data where ${selectedOption} != '0' and address LIKE '%${location}%';` 
        )
        return res.json(result.rows);
    } catch(err){
        console.log(err);
        return res.status(500).json("Internal server error")
    }
})

app.get('/donate', async (req, res) => {
    const location = req.query.location.toLocaleLowerCase();

    try {
        const result = await db.query(
            `SELECT * from donate_data where LOWER(address) LIKE '%${location}%';` 
        )
        return res.json(result.rows);
    } catch(err){
        console.log(err);
        return res.status(500).json("Internal server error")
    }
})

app.listen(8081, () => {
    console.log("listening...");
})