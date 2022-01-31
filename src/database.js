const mysql =require('mysql');

const mysqlConnection=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'password',
    database: 'register',
    
});

mysqlConnection.connect(function(err){
    if(err){
        console.log('no conecta', err);
        return;
    }else{
        console.log('DB is connected')
    }
});

module.exports=mysqlConnection;

