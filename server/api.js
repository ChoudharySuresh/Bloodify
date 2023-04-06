import fetch from "node-fetch";


const url ="https://www.eraktkosh.in/BLDAHIMS/bloodbank/nearbyBB.cnt?hmode=GETNEARBYSTOCKDETAILS&stateCode=27&districtCode=521&bloodGroup=all&bloodComponent=11";

async function fetchData () {
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
}

fetchData();
