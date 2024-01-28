
// const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const buttonValue1 = urlParams.get('buttonValue');
    // var a=document.getElementById('doc');
    // a.innerHTML+=buttonValue1;

import pg from "pg";
const { Client } = pg;

const connectionString = "postgresql://banachandrapal999:WX03zeUDknEG@ep-noisy-heart-a1tpohhd.ap-southeast-1.aws.neon.tech/neondb?sslmode=require";

const client = new Client({
    connectionString: connectionString
});

client.connect();
function createTable() {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS patientinfo (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            age INTEGER,
            aadhar VARCHAR(16),
            mobile VARCHAR(15),
            address VARCHAR(255),
            d DATE,
            reason VARCHAR(255)
        );
    `;

    client.query(createTableQuery, (err, res) => {
        if (err) {
            console.error("Error creating table:", err);
        } else {
            console.log("Table created successfully");
        }
    });
}

createTable();

function submitall() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var mobile = document.getElementById('mob').value;
    var aad = document.getElementById('Adnum').value;
    var add = document.getElementById('add').value;
    var date = document.getElementById('date').value;
    var reason = document.getElementById('reason').value;

    const insertQuery = `
        INSERT INTO patientinfo (name, age, aadhar, mobile, address, d, reason)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;

    client.query(insertQuery, [name, age, aad, mobile, add, date, reason], (err, res) => {
        if (err) {
            console.error("Error inserting data:", err);
        } else {
            console.log("Data inserted successfully");
        }
    });

    const selectQuery = "SELECT * FROM patientinfo"; // Corrected table name
    client.query(selectQuery, (err, res) => {
        if (err) {
            console.error("Error querying patientinfo:", err);
        } else {
            console.log("User data", res.rows);
        }
    });
}
export { submitall };

