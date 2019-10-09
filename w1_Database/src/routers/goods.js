/**
 * 商品CRUD
 * 增：C（Create）
 * 删：D（Delete）
 * 改：U（Update）
 * 查：R（Retrieve）
 */
const express = require('express');
const Router = express.Router();


const {mysql:query} = require('../db');

const {formatData} = require('../utils')

//使用连接对象来连接数据库
// 创建连接对象，并配置参数
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'jiaoxue'
// });
// connection.connect();

// 库存
Router.get('/kucun',(req,res)=>{
    let {id} = req.query;console.log(id)

    // 查询id对应商品的库存量，并返回前端
    let result = formatData({data:5})

    setTimeout(()=>{
        res.send(result);
    },600)

})

Router.route('/')
    .post((req,res)=>{
        
    })
    // 查询所有
    // /goods?page=1&size=10&sort=price,1
    .get(async (req,res)=>{
        let {size=10,page=1,price,sort} = req.query;
        let sql = `select * from goods limit ${(page-1)*size},${size}`;

        if(sort){
            sort = sort.split(',')
            sql += ` order by ${sort[0]} ${sort[1]==1?'asc':'desc'}`
        }
        // 回调写法
        // db.query(sql,(result)=>{
        //     res.send(reslut)
        // })

        // Promise写法
        // db.query(sql).then((result)=>{
        //     res.send(result);
        // })

        // async & await写法
        // 用同步的代码实现异步操作
        let result = await query(sql);
        res.send(result);
    });

Router.route('/:id')
    .delete(async (req,res)=>{
        let {id} = req.params;

        let result = await query(`delete from goods where id=${id}`)
        res.send(result);
    })
    .patch(async (req,res)=>{
        let {id} = req.params;

        // 接收请求体内的参数：req.body
        console.log('body:',req.body)
        let {price} = req.body;

        // 拼接sql语句
        let sql = `update goods set `
        for(key in req.body){
            sql += key + '=' + req.body[key] + ','
        }
        sql = sql.slice(0,-1);

        sql += ` where id=${id}`;
        console.log(sql)

        let result = await query(sql)
        // res.send(result);
        res.send(result)
    })
    .get(async (req,res)=>{
        let {id} = req.params;
        // 连接数据库
        

        // 查询数据
        // pool.query(`select * from goods where id=${id}`, function (error, results, fields) {
        //     if (error) throw error;
        //     res.send(results)
        // });
        // connection.end();

        let result = await query(`select * from goods where id=${id}`)
        res.send(result);
    });



module.exports = Router;