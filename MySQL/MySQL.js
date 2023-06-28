var mysql = require('mysql');

// // tạo kết nối đến MySQL
// var con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'canbocoithi'
// });

// var sql = "create table testcontomysql (id int, name varchar(255));";

// // sử dụng các câu lệnh sql để đọc hoặc ghi vào csdl. điều này còn được gọi là truy vấn tới csdl, 
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + result);
//     });
// });

// tạo kết nối tới MySQL server
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testcreatedb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // tạo database
    // var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY , name VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL)";
    // var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, favorite_product VARCHAR(255) NOT NULL)";
    var sql = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});