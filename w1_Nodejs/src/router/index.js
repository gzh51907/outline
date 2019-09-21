const express = require('express');
const Router = express.Router();

const goodsRouter = require('./goods');
// const userRouter = require('./user');

Router.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,PATCH,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
})

Router.use('/goods',goodsRouter);
// Router.use('/user',userRouter);
// Router.use('/reg',regRouter);


Router.get('/jsonp',(req,res)=>{
    // 获取回调函数名
    let {callback} = req.query;//getData

    // 读取数据库
    let person = {username:'laoxie',password:123456,gender:'male'}

    // jsonp请求后端必须拼接js代码
    res.send(`${callback}(${JSON.stringify(person)})`);//getData(123)
})

Router.post('/cors',(req,res)=>{
    // 设置响应头
    // 允许所有网站请求我的数据：*
    res.header('Access-Control-Allow-Origin','*');
    // res.set('Access-Control-Allow-Origin','*')
    // res.set({
    //     'Access-Control-Allow-Origin':'*'
    // })

    let person = {username:'xiaoxie',password:123,gender:'female'}
    res.send(person);
})
module.exports = Router;