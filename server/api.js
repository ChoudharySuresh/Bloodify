//import { json } from "body-parser";
//import fetch from "node-fetch";
//import fs from "fs";

const fs = require('fs')


const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pg = require('pg')

const db = new pg.Client({
    user:'postgres',
    host:'localhost',
    database:'bloodify',
<<<<<<< HEAD
    password:'Suresh@8636',
=======
    password:'123456',
>>>>>>> 042b7e69d268a0c03b41163e686d92a56cba2213
    port:5432,
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
//const url ="https://www.eraktkosh.in/BLDAHIMS/bloodbank/nearbyBB.cnt?hmode=GETNEARBYSTOCKDETAILS&stateCode=-1&districtCode=-1&bloodGroup=all&bloodComponent=11&lang=0&_=1680773217185";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

function fetchData() {
    //     const data = await fetch(url);
    //     const response = await data.json();
    //     var res = JSON.stringify(response)
    // fs.writeFile("output.json", res, 'utf8', function (err) {
    //     if (err) {
    //         console.log("An error occured while writing JSON Object to File.");
    //         return console.log(err);
    //     }

    //     console.log("JSON file has been saved.");
    // });
    // //console.log(response);


    fs.readFile("./output.json", "utf8", async  (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err);
            return;
        }
        try {
            const data = JSON.parse(jsonString);
            //console.log("data", data.data[0][1]);

<<<<<<< HEAD
            for(var i=0; i<3319;i++)
=======
            for(var i=3280; i<3319;i++)
>>>>>>> 042b7e69d268a0c03b41163e686d92a56cba2213
            {
                //console.log(data.data[i]);
            
                //console.log(typeof(data.data[0][1]));
            var addr = data.data[i][1].split("<br/>");
            //console.log(addr);
            var details = addr[2].split(",");
            //console.log(details);
            
            // var detphn = details[0].split(":");
            // console.log(detphn);
            var blooddet = data.data[i][3].replace(/<p class='text-success'>/gi, ' ')
            //console.log(blooddet);
            var blooddetail = blooddet.replace('</p>', ' ')
            //console.log(blooddetail); 
            var blooddetail1 = blooddetail.split(", ");
            //console.log(blooddetail1);

            var bloodgroups = {
                'A+Ve': 0,
                'AB-Ve':0,
                'O+Ve':0,
                'AB+Ve':0,
                'B+Ve':0,
                'B-Ve':0,
                'O-Ve':0,
                'A-Ve':0 
        }

            for(var j=1; j<blooddetail1.length; j++)
            {

                var bloodgroup = blooddetail1[j].split(":");
                bloodgroups[bloodgroup[0]]=Number( bloodgroup[1]);

            }
            //console.log(bloodgroups);

            db.query('insert into blood_data (name, address, phoneNo, email, a_pos, a_neg, b_pos, b_neg, ab_pos, ab_neg, o_pos,o_neg) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', [addr[0], addr[1], details[0].substring(8,), details[2].substring(8,),bloodgroups['A+Ve'], bloodgroups['A-Ve'], bloodgroups['B+Ve'], bloodgroups['B-Ve'], bloodgroups['AB+Ve'], bloodgroups['AB-Ve'], bloodgroups['O+Ve'], bloodgroups['O-Ve']], (err,res)=>{
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Data insert successful');
                
            })
            //var a_pos = blooddetail1[1];
            //console.log(a_pos);
            //await sleep(1000);
        }

        } catch (err) {
        console.log("Error parsing JSON string:", err);
    }
});
}

fetchData();
