var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testcreatedb'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // Cú pháp SQL để thêm 20 giá trị vào bảng customers
    var sql = "INSERT INTO products (name) VALUES ?";
    var values = [
        ['John'],
        ['Peter'],
        ['Amy'],
        ['Hannah'],
        ['Michael'],
        ['Sandy'],
        ['Betty'],
        ['Richard'],
        ['Susan'],
        ['Vicky'],
        // Thêm 10 bản ghi khác ở đây
        ['Alice'],
        ['David'],
        ['Linda'],
        ['Robert'],
        ['Jennifer'],
        ['Daniel'],
        ['Emily'],
        ['Thomas'],
        ['Jessica'],
        ['Andrew']
    ];


    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});


// con.connect(function (err) {
//     if (err) throw err;
//     var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted, ID: " + result.insertId);
//     });
// });