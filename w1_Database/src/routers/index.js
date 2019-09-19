const express = require('express');
const Router = express.Router();

// 引入每个模块路由
const goodsRouter = require('./goods');
const userRouter = require('./user');

Router.use(express.urlencoded({extended:true}),express.json());//推导：内部自动调用next

Router.use('/goods',goodsRouter);
Router.use('/user',userRouter);


module.exports = Router