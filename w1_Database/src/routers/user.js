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
const {formatData} = require('../utils')

const colName = 'user'

// 注册
// /user/reg
Router.post('/reg',async (req,res)=>{
    let {username,password} = req.body;

    let result = await mongo.create(colName,[{username,password,regtime:Date.now()}]);

    res.send(result);
})

Router.get('/check',async (req,res)=>{
    let {username} = req.query;

    let result = await mongo.find(colName,{username});
    if(result.length){
        res.send(formatData({code:0}))// {code:1,msg:'success',data}
    }else{
        res.send(formatData());
    }
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