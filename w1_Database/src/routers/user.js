/**
 * 用户CRUD
 * 增：C（Create）
 * 删：D（Delete）
 * 改：U（Update）
 * 查：R（Retrieve）
 */
const express = require('express');
const Router = express.Router();

const {mongo} = require('../db')

// 注册
// /user/reg
Router.post('/reg',(req,res)=>{

})

// 查询所有用户
Router.get('/',async (req,res)=>{
    let result = await mongo.find('user',{age:'28',gener:'jingjing'})

    res.send(result)
})

Router.route('/:id')
    // 删除
    .delete((req,res)=>{
        
    })
    // 用户信息修改
    .patch((req,res)=>{
        
    })

    // 查询用户
    .get((req,res)=>{
        
    })




module.exports = Router;