import pg from "pg";
const { Client } = pg;
// const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const buttonValue1 = urlParams.get('buttonValue');
    // var a=document.getElementById('doc');
    // a.innerHTML+=buttonValue1;

    const connectionString = "postgresql://banachandrapal999:WX03zeUDknEG@ep-noisy-heart-a1tpohhd.ap-southeast-1.aws.neon.tech/neondb?sslmode=require";

    const client = new Client({
    connectionString: connectionString
    });

    client.connect();

    function submitall(){
        var name=document.getElementById('name').value;
        var age=document.getElementById('age').value;
        var mobile=document.getElementById('mob').value;
        var add=document.getElementById('Adnum').value;
        var aad=document.getElementById('add').value;
        var date=document.getElementById('date').value;
        var reason=document.getElementById('reason').value;
        alert(name + mobile + add + aad + date + reason);
        db.connect();

        db.query("insert into patientinfo {name,age,aadhar,mobile,address,d,reason} values($1,$2,$3,$4,$5,$6,$7)",[name,age,aad,mobile,add,date,reason]);
     db.query("select * from users ",(err,res)=>{
        if(err){
            console.err("hii");
        }
        else{
            console.log("user data",res.rows);
        }
        db.end();
    });
}

