const {Client}=require('pg')

const client=new Client({
    user:"postgres",
    host:"localhost",
    database:"sqlProject",
    password:"adilevy156",
    port:5432

});

client.connect();

module.exports=client;