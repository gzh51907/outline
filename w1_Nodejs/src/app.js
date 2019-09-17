const express = require('express');

const app = express();

// 静态资源服务器
// 网站根目录
app.use(express.static('./'));

// json的引入
let {PORT}  = require('./config.json');

// 引入所有路由
let allRouter = require('./router/index.js')

// 使用路由
app.use(allRouter)

app.listen(PORT,()=>{
    console.log(`server is runing on port ${PORT}`)
})