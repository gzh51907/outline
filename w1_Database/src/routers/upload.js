const express = require('express');
const Router = express.Router();

const {mongo} = require('../db');
const {formatData,token} = require('../utils');
const fs = require('fs');
const path = require('path');
const multer  = require('multer');

// 定义中间件，并设置上传目录
// const upload = multer({ dest: 'uploads/' })
const upload = multer({
    storage:multer.diskStorage({
        destination: function (req, file, cb) {
            try{
                fs.accessSync('uploads/')
            }catch(err){
                fs.mkdirSync('uploads/')
            }

            if(file.fieldname === 'avatar'){
                let dir = './uploads/avatar/';
                try{
                    fs.accessSync(dir)
                }catch(err){
                    fs.mkdirSync(dir)
                }
                cb(null, dir);
            }else if(file.fieldname === 'goods'){
                let dir = './uploads/goods/';
                try{
                    fs.accessSync(dir)
                }catch(err){
                    fs.mkdirSync(dir)
                }
                cb(null, dir);
            }else{
                cb(null, './uploads/');
            }
        },
  
        // 上传文件保存目录，无则自动创建
        // destination:'./uploads/',
  
        // 格式化文件名
        filename: function (req, file, cb) {console.log(666)
            // 获取文件后缀名
            let ext = path.extname(file.originalname);
            let filename = `${file.fieldname}-${Date.now()}${ext}`
  
            cb(null, filename);
        }
    })
})


// 用户头像
Router.post('/avatar',upload.single('avatar'),async (req,res)=>{
    // req.file
    console.log(req.file);
    res.send(req.file);
});


// 商品图片
Router.post('/goods',upload.array('goods',5),async (req,res)=>{
    res.send(req.files);
});

module.exports = Router;