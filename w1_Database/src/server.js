const express = require('express');
const {PORT} = require('./config.json');
const allRouter = require('./routers');

const app = express();

// 静态资源服务器
app.use(express.static('./'));

app.use(allRouter);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})