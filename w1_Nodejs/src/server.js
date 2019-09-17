const express = require('express');

const app = express();

// 使用express中间件
// 静态资源服务器中间件
let mw = express.static('./');
app.use(mw);

// 无path参数，所有访问都可进入
// 使用use，不论任何请求都可进入，所以一般不会用use来编写数据接口
// app.use('/laoxie',function(req,res,next){
//     console.log('laoxie');

//     // 必须调用next才能进入下一个中间件
//     next();
// })

// app.use('/laoyao',function(req,res,next){
//     console.log('laoyao');
// })

// 获取所有商品
app.get('/goods',(req,res)=>{
    // req:request
    // res:response

    res.send([{name:'huawei p30 pro',price:3999},{name:'huawei meta30 pro',price:5999}])
})

// 获取单个商品
app.get('/goods/:id',(req,res)=>{
    // 获取动态路由参数：req.params
    // req:request
    // res:response

    res.send({id:req.params.id,name:'huawei meta30 pro',price:5999})
})

app.post('/goods',(req,res)=>{
    // req:request
    // res:response

    res.send({name:'xiaomi xxx',price:2999})
})

app.delete('/goods',(req,res)=>{
    // req:request
    // res:response

    res.send('删除商品成功')
})

app.patch('/goods',(req,res)=>{
    // req:request
    // res:response

    res.send('商品修改成功')
})

// 监听端口(2^16)
app.listen(1907,()=>{
    console.log('服务器启动成功...')
})