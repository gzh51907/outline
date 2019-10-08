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
const {formatData,token} = require('../utils')

const colName = 'user'

// 注册
// /user/reg
Router.post('/reg',async (req,res)=>{
    let {username,password} = req.body;
    let result
    try{
        await mongo.create(colName,[{username,password,regtime:new Date()}]);
        result = formatData()
    }catch(err){
        result = formatData({code:0})
    }

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

// 登录
Router.get('/login',async (req,res)=>{
    let {username,password,mdl} = req.query;

    let result = await mongo.find(colName,{username,password});

    

    if(result.length>0){
        // 如用户需要免登陆操作，则生成一个token并返回给前端
        let Authorization
        if(mdl){
            Authorization = token.create(username)
        }
        res.send(formatData({data:Authorization}));
    }else{
        res.send(formatData({code:0}))
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