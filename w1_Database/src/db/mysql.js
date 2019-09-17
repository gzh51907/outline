const mysql = require('mysql');
// 使用连接池方式（官方是推荐）
//创建连接池（内部自动创建10个（默认）连接对象，在不需要时自动回收）
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    // connectionLimit:5,
    database: 'jiaoxue',
    multipleStatements: true
});


function query(sql){
    return new Promise((resolve,reject)=>{
        pool.query(sql, (error, results, fields)=>{
            if (error) {
                reject(error)
            };
            resolve(results);
        });
    })
}

module.exports = query;