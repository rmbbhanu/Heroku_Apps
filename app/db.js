'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user     : 'ycm12899guh9d8a4',
    password : 'arfu9ejc208hfkbk',
    database : 'yymbkf9o5hd97aw8'
});
//JAWSDB_URL: 
//mysql://ycm12899guh9d8a4:arfu9ejc208hfkbk@k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/yymbkf9o5hd97aw8
//heroku config:add DATABASE_URL="mysql://ycm12899guh9d8a4:arfu9ejc208hfkbk@k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/yymbkf9o5hd97aw8"


//mysql://bb7cb80ba23fd3:4e46b2fa@us-cdbr-iron-east-01.cleardb.net/heroku_01a0fa5ad6a68ba?reconnect=true
//mysql://b3ca7cfe40e6b8:a3089ee9@us-cdbr-iron-east-05.cleardb.net/heroku_cfe13983b5ea503?reconnect=true
// connection.connect(function(err) {
//     if (err) throw err;
connection.connect((err) =>{
    if(err) throw err;
    console.log("mysql connected..");
connection.query("SELECT 1 + 1",(err,rows)=>{ /* */ });

connection.on('error',function(err){
    console.log("[mysql error]",err);
});
// keep connection alive
setInterval(function () {
    connection.query('SELECT 1');
    console.log('Keep alive the connection.');
}, 30000);
});
module.exports = connection;