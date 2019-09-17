const express = require('express');
const Router = express.Router();

const goodsRouter = require('./goods');
// const userRouter = require('./user');

Router.use('/goods',goodsRouter);
// Router.use('/user',userRouter);
// Router.use('/reg',regRouter);

module.exports = Router;