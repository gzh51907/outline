const express = require('express');
const Router = express.Router();

const {formatData,token} = require('../utils')

// 引入每个模块路由
const goodsRouter = require('./goods');
const userRouter = require('./user');

Router.use(express.urlencoded({extended:true}),express.json());//推导：内部自动调用next

Router.use('/goods',goodsRouter);
Router.use('/user',userRouter);
Router.get('/verify',(req,res)=>{
    let Authorization = req.get('Authorization');

    // 校验token有效性
    let result = token.verify(Authorization);

    res.send(formatData({code:result?1:0}))
});

module.exports = Router